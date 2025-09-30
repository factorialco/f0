# F0 React Native

React Native implementation of the F0 Design System.

## Installation

```bash
npm install @factorialco/f0-react-native
# or
yarn add @factorialco/f0-react-native
# or
pnpm add @factorialco/f0-react-native
```

## Usage

```tsx
import { ExampleComponent } from "@factorialco/f0-react-native";

export default function App() {
  return <ExampleComponent text="Hello from F0!" />;
}
```

## Icons

The package includes a set of icons that can be imported and used in your React Native application.

```tsx
import { Icon, AppIcons } from "@factorialco/f0-react-native";

// Basic usage
<Icon icon={AppIcons.Calendar} size="sm" />;
<Icon icon={AppIcons.Calendar} size="md" />;
<Icon icon={AppIcons.Calendar} size="lg" />;
```

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
