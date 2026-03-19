# F0 React Native 🎨

> 🚧 **Status: WIP** — We are building this design system from the ground up. Expect changes and breaking changes as we iterate. 🏗️

React Native implementation of the F0 Design System.

## New Architecture compatibility

This package supports React Native **New Architecture only** (Fabric/TurboModules) and **Expo SDK 54+ only**. See [`docs/new-architecture.md`](docs/new-architecture.md) for requirements and troubleshooting (notably Reanimated + Uniwind host app setup).

### Supported compatibility matrix

| Host stack                                       | Support          |
| ------------------------------------------------ | ---------------- |
| Expo SDK 54+                                     | ✅ Supported     |
| Expo SDK 53 and below                            | ❌ Not supported |
| New Architecture enabled (`expo.newArchEnabled`) | ✅ Required      |
| Old Architecture                                 | ❌ Not supported |

## 🚀 Quick Setup

### 1️⃣ Install Dependencies

```bash
# 1) Install package + JS peer dependencies
pnpm add @factorialco/f0-react-native \
  date-fns@^3.6.0 \
  tailwind-merge@^3.4.0 \
  tailwind-variants@^3.2.2 \
  tailwindcss@^4.1.18 \
  uniwind@^1.2.7 \
  twemoji-parser@^14.0.0

# 2) Install Expo-native dependencies pinned to your SDK
npx expo install \
  expo-image \
  react-native-reanimated \
  react-native-worklets \
  react-native-safe-area-context \
  react-native-svg
```

> **Note:** The following peer dependencies are required:
>
> - `uniwind` and `tailwindcss` - Required for styling (must be configured in Metro and CSS files)
> - `tailwind-merge` and `tailwind-variants` - Required for component variant system and class merging
> - `react-native-reanimated` - Required for animations
> - `react-native-worklets` - Required by Reanimated 4
> - `react-native-safe-area-context` - Required for safe area handling
> - `react-native-svg` - Required for icon components
> - `date-fns` - Required for date utilities
> - `twemoji-parser` - Required for emoji support

### 2️⃣ Configure Babel

**`babel.config.js`:**

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // Expo only
  };
};
```

> **Note:** In managed Expo SDK 54+ apps using the standard `babel-preset-expo`, Reanimated/Worklets Babel plugins are already included and should not be added manually. In custom/bare hosts, follow [`docs/new-architecture.md`](docs/new-architecture.md) and add the required plugins explicitly.

### 3️⃣ Configure Metro

**`metro.config.js`:**

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

const config = getDefaultConfig(__dirname);

// Ensure CSS files trigger reloads
config.resolver.sourceExts = [...(config.resolver.sourceExts || []), "css"];

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
  dtsFile: "./uniwind-types.d.ts",
});
```

### 4️⃣ Create Global CSS

**`global.css` (root):**

```css
@import "tailwindcss";
@import "uniwind";

/* Import F0 styles (theme tokens + base styles) */
@import "@factorialco/f0-react-native/styles";

/* Add your app's source paths for Tailwind CSS v4 */
@source "./app/**/*.{js,jsx,ts,tsx}";
@source "./src/**/*.{js,jsx,ts,tsx}";

/* Add F0 component sources so Tailwind can detect classes */
@source "./node_modules/@factorialco/f0-react-native/lib";

/* Also scan library source files */
@source "./node_modules/@factorialco/f0-react-native/src/**/*.{js,jsx,ts,tsx}";
```

**Import in your entry file (`App.tsx` or `index.js`):**

```typescript
import "./global.css";
```

> **Note:** Add `@source "./node_modules/@factorialco/f0-react-native/lib";` so Tailwind can detect all component classes.

### 5️⃣ Add Inter Fonts (Host App)

F0 components use the **Inter** font family. The host app must embed the font files
and register them with Uniwind so both iOS and Android resolve them correctly.

#### Step A: Add font files

Place the Inter `.ttf` files in your project. **File names must match the PostScript
name embedded in each font file** (you can inspect PostScript names with tools like
`fc-query` or `fontTools`):

```
assets/fonts/Inter/
  Inter-Regular.ttf      # PostScript name: Inter-Regular   (weight 400)
  Inter-Medium.ttf       # PostScript name: Inter-Medium    (weight 500)
  Inter-SemiBold.ttf     # PostScript name: Inter-SemiBold  (weight 600)
  Inter-Bold.ttf         # PostScript name: Inter-Bold      (weight 700)
```

> **Why file names matter:** iOS resolves fonts by PostScript name, Android by
> asset file name (minus extension). When they match, a single CSS value works on
> both platforms without platform-specific overrides.

#### Step B: Register with `expo-font`

Add the `expo-font` config plugin to your **`app.json`**:

```json
[
  "expo-font",
  {
    "fonts": [
      "./assets/fonts/Inter/Inter-Regular.ttf",
      "./assets/fonts/Inter/Inter-Medium.ttf",
      "./assets/fonts/Inter/Inter-SemiBold.ttf",
      "./assets/fonts/Inter/Inter-Bold.ttf"
    ]
  }
]
```

This embeds the fonts at build time — no runtime `useFonts` call needed.

#### Step C: Define font variables in `global.css`

Add a `@theme` block **after** the F0 style imports:

```css
@theme {
  --font-normal: "Inter-Regular";
  --font-medium: "Inter-Medium";
  --font-semibold: "Inter-SemiBold";
  --font-bold: "Inter-Bold";
}
```

The values must match the file names (without `.ttf`). Uniwind maps Tailwind
`font-normal`, `font-medium`, `font-semibold`, and `font-bold` utilities to
these variables.

> **Rebuild required:** Font changes are picked up at build time, not via
> Metro hot reload. Run `npx expo prebuild --clean && npx expo run:ios` (or
> `run:android`) after adding or renaming font files.

### 6️⃣ TypeScript Support (Optional)

**`uniwind-types.d.ts` (root):**

```typescript
/// <reference types="uniwind/types" />
```

This file is automatically generated by Uniwind when you run Metro. You can add it to your `.gitignore` if desired.

## 🤖 PR Previews (Published with React Native ALPHA)

Expo preview publishing is tied to the React Native ALPHA workflow. The QR comment is posted only when the React Native ALPHA publish job succeeds.

- Trigger source: React Native ALPHA workflow (`build-and-publish-alpha`)
- Scope: runs when the React Native package changes (or when manually triggered with the `build` PR comment path in that workflow)
- Publish branch: `development`
- Update message: latest commit message (via `eas update --auto`)
- PR output: one updatable comment with Expo Go links and a QR code

### Required Secret

Add this repository secret in GitHub:

- `EXPO_TOKEN`: personal access token from Expo account settings

### How it appears in GitHub

On each PR update, CI posts or updates a single comment containing:

- Update metadata (message, group ID, timestamp)
- Expo update page link
- Direct QR link
- Embedded QR image for quick scan in Expo Go

## 📱 Expo Go (Latest Update)

Use this section after each manual update so people can install the latest build in Expo Go.

### ✅ Latest Update

- **Branch / Channel:** `production`
- **Update message:** `F0Text and AnimatedF0Text`
- **Published at:** `Mar 4, 2026`

### 🔗 Deep Link

- **[📱 Open in Expo Go](exp://u.expo.dev/354f5148-fa6f-45dd-8869-991a24b786e0/group/1b1c0f98-3681-420f-bfae-9e0d6a35bd91)**

### 📲 QR Code

<p align="center">
  <img width="25%" src="./assets/images/expo-go-qr.svg" alt="Expo Go QR Code" />
</p>

> **Android note:** If scanning the QR code with your device camera opens a browser or shows a 404, open Expo Go and use its built-in QR scanner.

## 📦 Usage

### Basic Component Usage

```tsx
import { F0Button, F0Icon, AppIcons } from "@factorialco/f0-react-native";

export default function App() {
  return (
    <>
      <F0Button label="Click me" variant="default" size="md" />
      <F0Icon icon={AppIcons.Calendar} size="md" />
    </>
  );
}
```

> Legacy `Button` and `Icon` remain available for backward compatibility, but are deprecated.

### Using the `cn` Utility

The package exports a `cn` utility function for merging Tailwind classes with automatic conflict resolution:

```tsx
import { cn } from "@factorialco/f0-react-native";
import { View } from "react-native";

function MyComponent({ className, isActive }) {
  return (
    <View
      className={cn(
        "bg-background p-4 rounded-lg",
        "border border-divider",
        isActive && "bg-accent",
        className,
      )}
    />
  );
}
```

The `cn` utility:

- ✅ Automatically merges Tailwind classes with conflict resolution
- ✅ Uses `tailwind-merge` under the hood
- ✅ Supports custom opacity class groups
- ✅ Properly handles conditional classes

### Component Variants

All components use `tailwind-variants` for type-safe variant props:

```tsx
import { F0Button } from "@factorialco/f0-react-native";

// Type-safe variants
<F0Button
  label="Primary Button"
  variant="default" // ✅ Autocomplete: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote"
  size="md" // ✅ Autocomplete: "sm" | "md" | "lg"
/>;
```

## 🔧 Troubleshooting

### Classes Not Being Detected by Uniwind

If styles from F0 components aren't being applied, ensure:

1. **Import styles and add source paths:** Your `global.css` includes the F0 styles and the F0 source path:

   ```css
   @import "@factorialco/f0-react-native/styles";
   @source "./node_modules/@factorialco/f0-react-native/lib";
   ```

2. **Metro Cache:** Clear Metro bundler cache:

   ```bash
   npx expo start --clear
   # or
   npm start -- --reset-cache
   ```

3. **Dependencies:** Verify all peer dependencies are installed:
   ```bash
   pnpm list tailwind-merge tailwind-variants tailwindcss uniwind
   ```

### TypeScript Errors with Variants

If you see TypeScript errors related to variants, ensure `tailwind-variants` is installed:

```bash
pnpm add tailwind-variants@^3.2.2
```

### Build Errors

If you encounter build errors, ensure:

- All peer dependencies are installed
- Metro config includes CSS file extensions
- Babel plugins are properly configured

## 🔧 Development

```bash
# Run tests
pnpm test

# Type check
pnpm tsc

# Lint
pnpm lint

# Build package
pnpm build
```

## 📦 Peer Dependencies

This package requires the following peer dependencies to be installed in your host project:

| Package                          | Version          | Required | Purpose                          |
| -------------------------------- | ---------------- | -------- | -------------------------------- |
| `react`                          | `*`              | ✅ Yes   | React library                    |
| `react-native`                   | `*`              | ✅ Yes   | React Native framework           |
| `tailwindcss`                    | `^4.1.18`        | ✅ Yes   | CSS framework                    |
| `uniwind`                        | `^1.2.7`         | ✅ Yes   | Tailwind CSS for React Native    |
| `tailwind-merge`                 | `^3.4.0`         | ✅ Yes   | Class merging utility            |
| `tailwind-variants`              | `^3.2.2`         | ✅ Yes   | Variant system                   |
| `react-native-reanimated`        | `^4.1.0`         | ✅ Yes   | Animations                       |
| `react-native-worklets`          | `>=0.5.0 <1.0.0` | ✅ Yes   | Worklet runtime for Reanimated 4 |
| `react-native-safe-area-context` | `^5.6.0`         | ✅ Yes   | Safe area handling               |
| `react-native-svg`               | `^15.12.1`       | ✅ Yes   | SVG support for icons            |
| `date-fns`                       | `^3.6.0`         | ✅ Yes   | Date utilities                   |
| `twemoji-parser`                 | `^14.0.0`        | ✅ Yes   | Emoji support                    |

## 📄 License

MIT
