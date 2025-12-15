# React Native Playground 🎮

Playground for developing and testing F0 Design System components in React Native.

## 🚀 Quick Start

### 1️⃣ Install Dependencies

```bash
# From monorepo root
pnpm install
```

The design system build runs automatically after installation via `postinstall` hook.

### 2️⃣ Prebuild

```bash
# Generate native files
pnpm prebuild
```

### 3️⃣ Build & Run

```bash
# iOS
pnpm build:dev:ios

# Android
pnpm build:dev:android
```

## 📚 Storybook

### Generate Stories

```bash
pnpm storybook-generate
```

Storybook is enabled by default in metro config. To disable it, edit `metro.config.js` and set `enabled: false`.

## 📝 Available Scripts

- `dev` - Start Expo with dev client
- `dev:ios` - Run on iOS
- `dev:android` - Run on Android
- `prebuild` - Generate native files
- `build:dev:ios` - Development build for iOS
- `build:dev:android` - Development build for Android
- `storybook-generate` - Generate Storybook stories
