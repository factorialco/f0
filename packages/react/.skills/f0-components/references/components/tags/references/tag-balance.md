## TagBalance

A specialized tag for financial or metric data. It displays an amount, a percentage change, and a visual trend indicator (up/down/neutral).

**Props:**
- `amount`: `string` (Required) - The primary value (e.g., "$1,200.00").
- `percentage`: `number | string` (Required) - The change value.
- `trend`: `'up' | 'down' | 'neutral'` (Required) - Determines the arrow direction and color.
- `inverted`: `boolean` (Optional) - If true, "up" becomes red and "down" becomes green (useful for metrics like "Expenses" or "Latency").
- `showInfo`: `boolean` (Optional) - Displays an info icon for tooltips.

```tsx
import { TagBalance } from '@ui/tags';

export const BalanceDisplay = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    {/* Standard growth */}
    <TagBalance 
      amount="$45,000" 
      percentage="12%" 
      trend="up" 
    />
    
    {/* Inverted metric (e.g., Cost reduction is good) */}
    <TagBalance 
      amount="$2,000" 
      percentage="5%" 
      trend="down" 
      inverted 
    />
  </div>
);
```

**Gotchas:**
- If `amount` is null or undefined, the component may render a placeholder or empty state depending on the implementation.