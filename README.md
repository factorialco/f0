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

## Contributing

F0 is built and maintained by the Foundations team **with** contributions from every Factorial team. To propose a new component, report a bug, or improve something existing, see the [Contributing guide](packages/react/docs/contributions.mdx) and follow the [F0 component lifecycle](packages/react/docs/definition-of-done.mdx).

Skills for AI-assisted development:

- [`f0-component-contribution`](vendor/skills/f0-component-contribution/SKILL.md) — propose, design, and build a new component.
- [`f0-component-promotion`](vendor/skills/f0-component-promotion/SKILL.md) — promote `experimental/` → stable (Foundations only).
- [`f0-experimental-component-migration`](packages/react/.skills/f0-experimental-component-migration/SKILL.md) — migrate experimental components to stable.

For the full list of skills, see [AI Configuration](packages/react/docs/ai-configuration.mdx).
