# Legal — Mutual NDA Package

This folder ships the Real Tech Mutual Non-Disclosure Agreement as a Markdown source, a branded HTML template, and a Python build script that renders the two into a printable, signable PDF.

> **Critical disclaimer.** This is a starting template based on common founder-NDA patterns. **It is not legal advice.** No party should sign it before review by Tim Elias's legal contacts, or another attorney qualified in the relevant jurisdiction (Arizona by default). The footer "Template — review by qualified counsel before execution." remains on every page until the cofounders affirmatively remove it after legal review.

---

## What's in this folder

```
legal/
├── README.md                      ← you are here
├── NDA-Real-Tech-Mutual.md        ← the source of truth (edit this)
├── template.html                  ← branded HTML wrapper for PDF rendering
├── build-nda.py                   ← Python script: Markdown -> branded PDF
└── output/
    ├── NDA-Real-Tech-Mutual.pdf   ← generated signable PDF (run build-nda.py)
    └── NDA-Real-Tech-Mutual.html  ← generated HTML preview if PDF deps missing
```

---

## Why this design

The NDA needs to be:

1. **Editable** — cofounders, and especially Tim's counsel, will mark it up. Markdown is the cleanest review format.
2. **Brandable** — it's the second physical artifact (after slide 2) that Justin / Braeden / Wil see. It needs to look like Real Tech.
3. **Signable** — must work in Adobe Acrobat / DocuSign / HelloSign. PDF with printable signature lines does both.
4. **Reproducible** — anyone with Python can regenerate the PDF after edits, with no design decisions baked into the build.

So: edit `NDA-Real-Tech-Mutual.md`. Run `python build-nda.py`. Get the updated `output/NDA-Real-Tech-Mutual.pdf`.

---

## What the NDA covers (one-page summary)

This is a faithful summary, not a substitute for reading the actual document.

| Element | Position |
|---------|----------|
| **Parties** | Real Tech LLC (Arizona) ↔ each individual signer (cofounder or recruit) |
| **Purpose** | Evaluating, planning, and discussing a potential founding-team relationship |
| **Confidential Information** | Business plans, product roadmaps, financials, partner identities, patent-pending tech (DealPayment), source code, personnel matters, and the existence of these discussions |
| **Standard exclusions** | Already-public, prior-knowledge, third-party-disclosed, independently-developed |
| **Use restriction** | Solely for the Purpose; advisor sub-disclosure permitted with confidentiality bind |
| **Term** | 3 years for general info · perpetual for trade secrets and patent-pending tech |
| **Mutual non-solicit** | 12 months — applies to personnel and named partners introduced under this NDA. Standard carve-outs (general advertising, pre-existing relationships). |
| **No non-compete** | Explicitly excluded. FTC environment in 2024+ has weakened non-competes; cleaner to leave out. Counsel may add later. |
| **Third-party IP protection** | Express, separate clause: no party will share confidential information of any current or former employer (specifically named: SmartRent). **This is the most important clause given team composition.** |
| **IP / patent prosecution** | No license granted; patent prosecution rights expressly preserved |
| **Compelled disclosure** | Notice + cooperation + minimum-required-disclosure |
| **Return / destruction** | On request or termination, return or destroy with one-archival-copy carve-out |
| **Remedies** | Equitable relief available (injunction, specific performance) without bond; prevailing-party fees |
| **Governing law** | Arizona; venue Maricopa County |
| **General** | Entire-agreement, severability, e-signature equivalence |

For the full text, see [`NDA-Real-Tech-Mutual.md`](NDA-Real-Tech-Mutual.md).

---

## Cofounder signing workflow

1. **Review the source.** Read [`NDA-Real-Tech-Mutual.md`](NDA-Real-Tech-Mutual.md) end to end. Mark up anything in question.
2. **Have Tim's counsel review.** Or any other attorney admitted in Arizona. Apply edits to the Markdown source, not the PDF.
3. **Regenerate the PDF.** Run `python build-nda.py` from the `legal/` folder. The freshly built PDF lands at [`output/NDA-Real-Tech-Mutual.pdf`](output/NDA-Real-Tech-Mutual.pdf).
4. **Remove the disclaimer footer.** Once counsel signs off, delete the `> **Template — review by qualified counsel before execution. Not legal advice.**` blockquote at the bottom of the Markdown source, and re-build.
5. **Circulate for signature.** Upload the PDF to Adobe Acrobat / DocuSign / HelloSign (any platform that supports field-overlay e-signatures). Add signature fields over each "Signature:" line. Send to all six cofounders.
6. **Collect all six signatures.** Do not advance past slide 2 of the deck until all six are returned.
7. **Archive the executed PDFs.** Save the fully executed copies (one per cofounder, or one master with all six signatures) outside this repo (e.g., a private cloud folder accessible only to founders).

---

## Generating the PDF

### Prerequisites

- **Python 3.13** (already on the system per the planning notes)
- One-time install of dependencies:

```powershell
pip install markdown jinja2 weasyprint pyyaml
```

### Build

From the `legal/` folder:

```powershell
python build-nda.py
```

Expected output:

```
[ok] Wrote PDF: legal/output/NDA-Real-Tech-Mutual.pdf
```

### Fallback chain (the script always produces *something*)

The build script tries renderers in this order:

1. **WeasyPrint** — best output (true `@page` headers/footers + native PDF metadata)
2. **Chromium headless** — automatic fallback if WeasyPrint can't load native libs. Looks for Edge / Chrome / Chromium / Brave on the standard paths and on `PATH`. Override with the env var `CHROME_PATH` or `EDGE_PATH` if your browser is in a non-standard location:

   ```powershell
   $env:CHROME_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"
   python build-nda.py
   ```

3. **HTML preview** — final fallback. The script writes `legal/output/NDA-Real-Tech-Mutual.html` (styled, branded). Open in a browser and use Print → "Save as PDF" with margins set to "None".

So in the absence of WeasyPrint native libs, you'll see:

```
[warn] WeasyPrint installed but its native libraries could not be loaded ...
[ok] Wrote PDF (Chromium headless fallback): legal/output/NDA-Real-Tech-Mutual.pdf
```

…or, with no browser at all:

```
[ok-fallback] Wrote HTML preview: legal/output/NDA-Real-Tech-Mutual.html
```

The Chromium headless path produces a print-quality PDF in one command, so most teams won't need to bother with the GTK install for WeasyPrint.

---

## WeasyPrint on Windows — install troubleshooting

WeasyPrint depends on the native **GTK 3** runtime to render PDFs. On Windows, the cleanest path:

1. Install Python 3.13 (already done).
2. Install WeasyPrint:

   ```powershell
   pip install weasyprint
   ```

3. If you see `OSError: cannot load library 'libgobject-2.0-0'` or similar at runtime, install the GTK runtime via the official MSYS2 method documented at [WeasyPrint's Windows install guide](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html#windows).

   The short version (PowerShell, Admin):

   ```powershell
   winget install --id MSYS2.MSYS2 -e
   # Then in the MSYS2 shell:
   pacman -S mingw-w64-x86_64-pango
   ```

   And add `C:\msys64\mingw64\bin` to your `PATH`.

4. Re-run `python build-nda.py`. The PDF should now render.

If WeasyPrint stays uncooperative, the HTML-fallback path (above) is sufficient for cofounder review until the meeting; the production PDF can be generated on any one teammate's machine and shared.

---

## Editing the NDA

- **Edit the source, not the PDF.** [`NDA-Real-Tech-Mutual.md`](NDA-Real-Tech-Mutual.md) is the source of truth.
- **Front-matter** (the YAML block at the top) drives metadata that flows into the page header. Update `version` and `last_updated` whenever you re-render.
- **Headings.** `# H1` = document title (rendered once at top). `## H2` = numbered section. `### H3` = subsection (e.g., signature blocks). Don't go deeper than `### H3` — the template is tuned for that depth.
- **Signature blocks** are written as `### Name — Role` followed by `Signature: ______________________________` lines. The template renders each block on its own visual sub-card.
- **Brand colors / typography** live in [`template.html`](template.html); tokens mirror [`../brand/colors.md`](../brand/colors.md). Don't introduce new colors there — derive via opacity if needed.

---

## What this NDA does *not* do

- It does **not** cover any non-competition. By design.
- It does **not** transfer any intellectual property. Either direction.
- It does **not** create any partnership, joint venture, or employment relationship.
- It does **not** obligate any party to enter into any further agreement.
- It does **not** waive any current employer's rights — the third-party IP protection clause (Section 7) explicitly safeguards SmartRent's confidential information.

If the cofounders want a separate **confidentiality + IP assignment + cofounder agreement** stack later, that's a different document set authored after counsel review. This NDA is the gating step.

---

## When to remove the disclaimer footer

Remove `> **Template — review by qualified counsel before execution. Not legal advice.**` from the bottom of `NDA-Real-Tech-Mutual.md` only after **all** of these are true:

1. A qualified attorney admitted in Arizona has reviewed the document
2. Counsel has either approved as-is or applied edits, which were then merged into the Markdown source
3. The cofounders have agreed (in the meeting or in writing) that the document is ready to circulate for signature
4. The freshly rendered PDF has been re-validated against the agreed Markdown

Until then, leave it on — it's a feature, not a flaw.

---

## Open items (for the revision pass)

- Confirm Real Tech LLC formation status (or change party to "Johnathan Sorisho, an individual doing business as Real Tech")
- Confirm cofounder full legal names + signature emails
- Tim Elias's counsel name and contact for the review step
- Decide whether to add an electronic-signature platform header (DocuSign / Adobe / HelloSign) embed at the bottom of `template.html`
