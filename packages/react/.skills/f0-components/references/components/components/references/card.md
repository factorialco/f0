## Card

The Card component is a flexible container used to group related information. It supports structured sub-sections like subtitles, info tooltips, footers, and comments. Use it to create dashboard widgets, list items, or content blocks.

**Props:**
- `title`: `ReactNode` (Required) - The main heading of the card.
- `subtitle`: `ReactNode` - Secondary text displayed below the title.
- `info`: `ReactNode` - Content for an info icon/tooltip displayed in the header.
- `footer`: `ReactNode` - Content displayed in a dedicated bottom section.
- `comment`: `ReactNode` - A specific section for user comments or metadata.
- `onClick`: `() => void` - Makes the entire card clickable.
- `disabled`: `boolean` - Disables click events and applies muted styling.
- `children`: `ReactNode` - The main body content of the card.

```tsx
import { Card } from './card';

export const ProjectCard = () => (
  <Card 
    title="Quarterly Report"
    subtitle="Q3 2023 Financials"
    info="Data updated 2 hours ago"
    footer={<button>Download PDF</button>}
    onClick={() => navigate('/reports/q3')}
  >
    <p>The quarterly report shows a 15% increase in revenue compared to Q2.</p>
  </Card>
);
```

**Gotchas:**
- If `onClick` is provided, the card automatically receives hover states and ARIA roles for interactivity.
- Avoid placing too many interactive elements inside a clickable card to prevent event bubbling issues.