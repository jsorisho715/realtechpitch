"""Build the Mutual NDA PDF from the Markdown source.

Usage:
    python build-nda.py

Reads:
    legal/NDA-Real-Tech-Mutual.md   (the source of truth)
    legal/template.html              (branded HTML wrapper)

Writes:
    legal/output/NDA-Real-Tech-Mutual.pdf

Dependencies (install with `pip install -r requirements.txt`):
    - markdown      (Markdown -> HTML conversion)
    - jinja2        (template substitution)
    - weasyprint    (HTML -> PDF rendering, with @page support)
    - PyYAML        (front-matter parsing)

Notes:
    WeasyPrint on Windows requires GTK runtime. See legal/README.md for
    the install workflow. If WeasyPrint isn't available, the script
    falls back to writing an HTML preview at the same output path
    (with .html extension) so cofounders can review in a browser
    until the PDF toolchain is wired up.
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE_MD = ROOT / "NDA-Real-Tech-Mutual.md"
TEMPLATE_HTML = ROOT / "template.html"
OUTPUT_DIR = ROOT / "output"
OUTPUT_PDF = OUTPUT_DIR / "NDA-Real-Tech-Mutual.pdf"
OUTPUT_HTML_FALLBACK = OUTPUT_DIR / "NDA-Real-Tech-Mutual.html"

CHROMIUM_CANDIDATES = [
    os.environ.get("CHROME_PATH"),
    os.environ.get("EDGE_PATH"),
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
]


def split_front_matter(text: str) -> tuple[dict, str]:
    """Split YAML front-matter (between `---` fences) from Markdown body.

    Returns (metadata_dict, body_markdown).
    If no front-matter is present, returns ({}, text).
    """
    if not text.startswith("---"):
        return {}, text

    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text

    raw_yaml, body = parts[1], parts[2]

    try:
        import yaml  # type: ignore
    except ImportError:
        print(
            "[warn] PyYAML not installed; front-matter ignored. "
            "Install with: pip install pyyaml",
            file=sys.stderr,
        )
        return {}, body.lstrip("\n")

    try:
        meta = yaml.safe_load(raw_yaml) or {}
    except yaml.YAMLError as exc:
        print(f"[warn] Could not parse front-matter: {exc}", file=sys.stderr)
        meta = {}

    return meta, body.lstrip("\n")


def render_markdown_to_html(md_text: str) -> str:
    """Convert Markdown body to HTML using sensible extensions."""
    try:
        import markdown  # type: ignore
    except ImportError:
        print(
            "[error] `markdown` package not installed. "
            "Install with: pip install markdown",
            file=sys.stderr,
        )
        sys.exit(1)

    return markdown.markdown(
        md_text,
        extensions=[
            "extra",        # tables, fenced code, attr_list
            "sane_lists",
            "smarty",       # smart quotes/dashes
            "toc",
        ],
        output_format="html5",
    )


def apply_template(template_html: str, *, title: str, body_html: str) -> str:
    """Substitute the rendered body into the branded template.

    Uses Jinja2 if available (matches the {{ body | safe }} syntax in
    template.html). Falls back to naive token replacement if not, so the
    script still functions in minimal environments.
    """
    try:
        from jinja2 import Template  # type: ignore
    except ImportError:
        return (
            template_html
            .replace("{{ title }}", title)
            .replace("{{ body | safe }}", body_html)
        )

    return Template(template_html).render(title=title, body=body_html)


def write_pdf(rendered_html: str, output_path: Path) -> bool:
    """Render rendered_html into a PDF at output_path.

    Returns True on success, False if WeasyPrint is unavailable
    (in which case the caller should write the HTML fallback).
    """
    try:
        from weasyprint import HTML  # type: ignore
    except ImportError:
        print(
            "[warn] WeasyPrint not installed. PDF generation skipped. "
            "Falling back to HTML preview. See legal/README.md for "
            "WeasyPrint Windows install instructions.",
            file=sys.stderr,
        )
        return False
    except OSError as exc:
        print(
            f"[warn] WeasyPrint installed but its native libraries "
            f"could not be loaded ({exc}). Falling back to HTML preview. "
            f"See legal/README.md for the GTK runtime install steps.",
            file=sys.stderr,
        )
        return False

    HTML(string=rendered_html, base_url=str(ROOT)).write_pdf(target=str(output_path))
    return True


def find_chromium_binary() -> str | None:
    """Return the first Chromium-family browser found on PATH or known dirs."""
    for candidate in CHROMIUM_CANDIDATES:
        if candidate and Path(candidate).is_file():
            return candidate

    for name in ("msedge", "chrome", "chromium", "chromium-browser", "brave"):
        on_path = shutil.which(name)
        if on_path:
            return on_path

    return None


def write_pdf_via_chromium(rendered_html: str, output_path: Path) -> bool:
    """Render rendered_html to PDF via Chromium-family headless browser.

    Used as a second fallback when WeasyPrint native libraries are missing.
    Edge / Chrome / Chromium / Brave all support the headless --print-to-pdf
    flag with modern CSS (including @page margins and headers).
    """
    binary = find_chromium_binary()
    if not binary:
        print(
            "[warn] No Chromium-family browser found for headless PDF fallback. "
            "Set CHROME_PATH or EDGE_PATH env var to a browser executable, or "
            "install Edge / Chrome / Chromium / Brave.",
            file=sys.stderr,
        )
        return False

    with tempfile.NamedTemporaryFile(
        prefix="nda-render-", suffix=".html", delete=False, mode="w", encoding="utf-8"
    ) as tmp:
        tmp.write(rendered_html)
        tmp_path = Path(tmp.name)

    try:
        cmd = [
            binary,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={output_path}",
            tmp_path.as_uri(),
        ]
        result = subprocess.run(
            cmd, capture_output=True, text=True, timeout=120, check=False
        )
        if result.returncode != 0 or not output_path.exists():
            print(
                f"[warn] Chromium headless PDF render failed "
                f"(exit {result.returncode}): {result.stderr.strip()[:240]}",
                file=sys.stderr,
            )
            return False
        return True
    finally:
        try:
            tmp_path.unlink(missing_ok=True)
        except OSError:
            pass


def main() -> int:
    if not SOURCE_MD.exists():
        print(f"[error] Source Markdown not found: {SOURCE_MD}", file=sys.stderr)
        return 1
    if not TEMPLATE_HTML.exists():
        print(f"[error] HTML template not found: {TEMPLATE_HTML}", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    raw = SOURCE_MD.read_text(encoding="utf-8")
    meta, body_md = split_front_matter(raw)
    title = meta.get("title", "Mutual Non-Disclosure Agreement")

    body_html = render_markdown_to_html(body_md)
    template_html = TEMPLATE_HTML.read_text(encoding="utf-8")
    rendered = apply_template(template_html, title=title, body_html=body_html)

    if write_pdf(rendered, OUTPUT_PDF):
        print(f"[ok] Wrote PDF (WeasyPrint): {OUTPUT_PDF.relative_to(ROOT.parent)}")
        return 0

    if write_pdf_via_chromium(rendered, OUTPUT_PDF):
        print(
            f"[ok] Wrote PDF (Chromium headless fallback): "
            f"{OUTPUT_PDF.relative_to(ROOT.parent)}"
        )
        return 0

    OUTPUT_HTML_FALLBACK.write_text(rendered, encoding="utf-8")
    print(
        f"[ok-fallback] Wrote HTML preview (open in a browser to review): "
        f"{OUTPUT_HTML_FALLBACK.relative_to(ROOT.parent)}"
    )
    print(
        "[next] Install WeasyPrint per legal/README.md, or install any "
        "Chromium-family browser (Edge / Chrome / Chromium / Brave), to "
        "generate the branded, print-ready PDF.",
        file=sys.stderr,
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
