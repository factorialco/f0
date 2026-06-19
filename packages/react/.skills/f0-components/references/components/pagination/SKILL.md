---
name: pagination
description: Component for navigating large datasets by dividing content into discrete pages. Use when displaying paginated API results, long tables, or search lists to improve performance and readability.
---

## Overview
The Pagination component allows users to navigate through large sets of data one page at a time. It supports fixed page counts, indeterminate states (where the total count is unknown), and customizable visibility ranges for page numbers.

## Props
- **ariaLabel** (optional): `string` - Accessible label for the pagination navigation. Default: "Page navigation".
- **currentPage** (optional): `number` - The current active page. Default: 1.
- **disabled** (optional): `boolean` - Whether to disable all pagination controls and interactions. Default: false.
- **hasNextPage** (optional): `boolean` - Used in indeterminate state (`totalPages={0}`) to indicate if there are more pages available. Default: true.
- **onPageChange** (optional): `(page: number) => void` - Callback function triggered when a user clicks a page number or navigation control.
- **showControls** (optional): `boolean` - Whether to show the previous and next arrow buttons. Default: true.
- **totalPages** (optional): `number` - The total number of pages. Pass 0 if the total is unknown (Indeterminate state).
- **visibleRange** (optional): `number` - The number of page buttons to show on each side of the current page. Default: 3.

## Usage Examples

### Standard Pagination
Use this when the total number of items and pages is known.

```tsx
import { Pagination } from './Pagination';

export const StandardExample = () => {
  const handlePageChange = (page: number) => {
    // Fetch new data or update state
    console.log('New page:', page);
  };

  return (
    <Pagination 
      currentPage={1} 
      totalPages={10} 
      onPageChange={handlePageChange} 
    />
  );
};
```

### Indeterminate State
Use this when the total number of pages cannot be accurately determined from the API. This removes numeric buttons and relies on arrow controls.

```tsx
<Pagination 
  currentPage={5} 
  totalPages={0} 
  hasNextPage={true} 
  onPageChange={(p) => console.log(p)} 
/>
```

### Custom Visible Range
Adjust how many page numbers appear around the current page to save horizontal space.

```tsx
<Pagination 
  currentPage={10} 
  totalPages={20} 
  visibleRange={1} 
/>
```

## Variants

### Long List
When `totalPages` is high, the component automatically handles truncation (ellipses) to maintain a consistent width based on the `visibleRange`.

### Without Controls
Set `showControls={false}` to hide the "Previous" and "Next" arrow buttons, showing only the numeric page links.

### Disabled
Set `disabled={true}` to prevent any user interaction. This is useful during data fetching states to prevent duplicate requests.

## Best Practices
- **Use for Large Sets**: Only use pagination when the dataset is too large to be consumed on a single page (typically > 20-50 items).
- **Indeterminate Loading**: If your backend doesn't provide a total count (e.g., cursor-based pagination), use `totalPages={0}` and the `hasNextPage` prop.
- **Placement**: Place pagination at the bottom of the list or table it controls.
- **Feedback**: Provide a loading state or disable the component while new data is being fetched to prevent rapid-fire page changes.

## Accessibility
- The component uses a `<nav>` element to ensure screen readers identify it as a navigation landmark.
- Always provide a descriptive `ariaLabel` if there are multiple navigation elements on the same page.
- Active page buttons should be programmatically identifiable (handled internally via `aria-current`).

## Related Skills
- For displaying the data controlled by this component, see the skill in ./references/table.md
- For handling data fetching logic, see the skill in ./references/use-data-fetch.md