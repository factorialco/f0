import { NativeTabs } from 'expo-router/unstable-native-tabs';

/**
 * Playground tab bar.
 *
 * Uses expo-router Native Tabs so the bar is the platform's real system tab bar:
 * a UITabBar on iOS (Liquid Glass material by default on iOS 26+) and a Material 3
 * bottom navigation on Android — both via react-native-screens, not a JS view.
 *
 * We intentionally do NOT set `backgroundColor`/`blurEffect`: on iOS 26 that would
 * replace the system Liquid Glass material. Light/dark adaptation is handled by the
 * OS. Icons use SF Symbols (`sf`) on iOS and Material symbols (`md`) on Android.
 */
export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="components">
        <NativeTabs.Trigger.Icon sf="square.grid.2x2.fill" md="widgets" />
        <NativeTabs.Trigger.Label>Components</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tokens">
        <NativeTabs.Trigger.Icon sf="paintpalette.fill" md="palette" />
        <NativeTabs.Trigger.Label>Design Tokens</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
