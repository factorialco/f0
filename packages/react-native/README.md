# F0 React Native 🎨

React Native implementation of the F0 Design System.

## 🚀 Quick Setup

### 1️⃣ Install Dependencies

```bash
# Install package and peer dependencies
pnpm add @factorialco/f0-react-native \
  date-fns@^3.6.0 \
  nativewind@^4.2.1 \
  react-native-reanimated@^3.19.4 \
  react-native-safe-area-context@^5.4.0 \
  react-native-svg@^15.12.1 \
  react-native-worklets-core@^1.6.2 \
  tailwindcss@^3.4.19 \
  twemoji-parser@^14.0.0

# Install dev dependencies
pnpm add -D tailwindcss@^3.4.19
```

### 2️⃣ Configure Babel

**`babel.config.js`:**

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], // Expo only
      "nativewind/babel",
    ],
    plugins: [
      "react-native-worklets-core/plugin",
      "react-native-reanimated/plugin", // MUST be last
    ],
  };
};
```

### 3️⃣ Configure Metro

**`metro.config.js`:**

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./global.css" });
```

### 4️⃣ Configure Tailwind

**`tailwind.config.js`:**

```javascript
const f0Config = require("@factorialco/f0-react-native/tailwind.config");

module.exports = {
  ...f0Config,
  content: [
    ...(f0Config.content || []),
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset"), ...(f0Config.presets || [])],
};
```

### 5️⃣ Create Global CSS

**`global.css` (root):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Import in your entry file (`App.tsx` or `index.js`):**

```typescript
import "./global.css";
```

### 6️⃣ TypeScript Support (Optional)

**`nativewind-env.d.ts` (root):**

```typescript
/// <reference types="nativewind/types" />
```

## 📦 Usage

```tsx
import { Button, Icon, AppIcons } from "@factorialco/f0-react-native";

export default function App() {
  return (
    <>
      <Button>Click me</Button>
      <Icon icon={AppIcons.Calendar} size="md" />
    </>
  );
}
```

## 🔧 Development

```bash
# Run tests
pnpm test

# Type check
pnpm tsc-check

# Lint
pnpm lint
```

## 📚 Documentation

For detailed installation guide, see [docs/INSTALLATION.md](./docs/INSTALLATION.md).

## 📄 License

MIT
