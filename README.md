# F0 Design System

F0 is a comprehensive design system for building consistent user interfaces across web and mobile platforms.

## Packages

This monorepo contains the following packages:

- `@factorialco/f0-core`: Core tokens and utilities shared across platforms (located in `packages/core`)
- `@factorialco/f0-react-native`: React Native implementation of the design system (located in `packages/react-native`)
- `@factorialco/f0-react`: React implementation of the design system (existing)

## Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Setup

```bash
# Install dependencies
pnpm install
```

### Building

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm --filter @factorialco/f0-core build
pnpm --filter @factorialco/f0-react-native build
```

### Testing

```bash
# Run tests for all packages
pnpm test

# Run tests for a specific package
pnpm --filter @factorialco/f0-core test
pnpm --filter @factorialco/f0-react-native test
```

## License

MIT
