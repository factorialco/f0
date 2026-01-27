# F0 Core

Core tokens and utilities for the F0 Design System.

## Installation

```bash
npm install @factorialco/f0-core
# or
yarn add @factorialco/f0-core
# or
pnpm add @factorialco/f0-core
```

## Usage

### Tailwind CSS v4 (Recommended)

For Tailwind CSS v4, import the CSS file directly:

```css
@import "@factorialco/f0-core/base.css";
```

This will automatically configure all theme tokens, colors, spacing, and utilities.

### Tailwind CSS v3 (Legacy)

For Tailwind CSS v3, you can use the JavaScript config:

```ts
import { baseConfig } from "@factorialco/f0-core/tailwind";

// In your tailwind.config.js
export default {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}"],
};
```

**Note:** The JavaScript config is deprecated and will be removed in a future version. Please migrate to Tailwind v4.

### Using Tokens Programmatically

```tsx
import { semanticColors, spacing, fontSizes } from "@factorialco/f0-core"

// Use tokens in your styles
const styles = {
  container: {
    padding: spacing[4],
    backgroundColor: semanticColors.background.default.light,
  },
  text: {
    fontSize: fontSizes.base,
    color: semanticColors.foreground.default.light,
  },
}
```

## Available Tokens

- `semanticColors`: Semantic color tokens for light and dark themes
- `baseColors`: Raw color values
- `spacing`: Spacing scale
- `fontSizes`: Font size scale
- `fontWeights`: Font weight values
- `lineHeights`: Line height values
- `letterSpacings`: Letter spacing values
- `borderRadius`: Border radius values

## Development

### Building

```bash
pnpm build
```

### Testing

```bash
pnpm test
```

## License

MIT
