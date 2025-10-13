// Import side effects first and services

// Initialize services

// Register app entry through Expo Router
import "expo-router/entry";

import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import StorybookUIRoot from "./.storybook";
import "./playground/global.css";

// Check for STORYBOOK_ENABLED environment variable
// This allows using:
// - yarn dev:storybook - to run with Storybook enabled
// - yarn dev:app - to run the regular app
// - yarn dev - to use the default setting below
const SHOW_STORYBOOK = process.env.STORYBOOK_ENABLED === "true" || true;

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./playground/app");
  return <ExpoRoot context={ctx} />;
}

// Register the app or Storybook based on the flag
registerRootComponent(SHOW_STORYBOOK ? StorybookUIRoot : App);
