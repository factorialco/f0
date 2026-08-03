# Release notes — F0Chat

## Highlights

- **Document previews**: spreadsheets, Word and text files now open fullscreen.
- Virtualized transcript on react-virtuoso.
- Optimistic message footer (WhatsApp-style times).

## Compatibility

| Type            | Preview | Notes                               |
| --------------- | ------- | ----------------------------------- |
| PDF             | Yes     | pdf.js viewer with zoom and paging  |
| Excel / CSV     | Yes     | Excel-style grid, one tab per sheet |
| Word (.docx)    | Yes     | Page layout via docx-preview        |
| Text / Markdown | Yes     | Rendered document for .md           |
| PowerPoint      | No      | Download chip                       |

> Files that fail to load fall back to the download chip, so the attachment is never lost.

```ts
const kind = documentPreviewKind(file) // "pdf" | "sheet" | "docx" | "text" | null
```
