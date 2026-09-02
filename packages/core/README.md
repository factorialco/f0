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

## Tailwind preset

`@factorialco/f0-core/tailwind` provides the shared F0 theme and plugins. It
does not safelist broad `bg-f1-*`, `text-f1-*`, or `border-f1-*` families.
Consumers that construct class names dynamically must safelist the exact
classes they generate in their own Tailwind configuration.

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
