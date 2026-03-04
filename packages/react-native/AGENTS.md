# AGENTS.md — packages/react-native

This is the F0 React Native component library (`@factorialco/f0-react-native`). See the root [AGENTS.md](../../AGENTS.md) for monorepo-level guidelines.

## Formatting

### Markdown code blocks with JSX

Always add `<!-- prettier-ignore -->` on the line before any ` ```tsx ` fence that contains JSX. Without this, `oxfmt` inserts semicolons before JSX expressions due to ASI protection (`"semi": false`). Pure import/variable-only blocks don't need it.
