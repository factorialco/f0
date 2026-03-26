# F0Tabs

Animated horizontal tab navigation strip for React Native in F0.

## Overview

`F0Tabs` mirrors the web `Tabs` component API and visual behaviour:

- **Primary** (`secondary=false`): pill background that instantly toggles on the active tab + a sliding underline that animates to the active tab via Reanimated spring.
- **Secondary** (`secondary=true`): pill background only, no underline.

Supports both controlled and uncontrolled modes.

## Usage

```tsx
import { F0Tabs } from "@factorialco/f0-react-native"

// Uncontrolled
<F0Tabs
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "courses", label: "Courses" },
  ]}
/>

// Controlled
<F0Tabs
  tabs={tabs}
  activeTabId={activeTab}
  setActiveTabId={setActiveTab}
/>

// Secondary (pill only)
<F0Tabs tabs={tabs} secondary />

// Piled — primary + secondary stacked (mirrors web)
<F0Tabs tabs={primaryTabs} />
<F0Tabs tabs={secondaryTabs} secondary />

// Embedded — renders only the first tab as plain text, no interaction
<F0Tabs tabs={tabs} embedded />
```

## Props

| Prop             | Type               | Default | Description                                              |
| ---------------- | ------------------ | ------- | -------------------------------------------------------- |
| `tabs`           | `F0TabItem[]`      | —       | List of tab items                                        |
| `activeTabId`    | `string`           | —       | Controlled active tab id                                 |
| `setActiveTabId` | `Dispatch<string>` | —       | Called with new tab id on press                          |
| `secondary`      | `boolean`          | `false` | Uses secondary visual style (pill only, compact height)  |
| `embedded`       | `boolean`          | `false` | Renders only the first tab as plain non-interactive text |

### `F0TabItem`

| Prop      | Type                    | Description                                                      |
| --------- | ----------------------- | ---------------------------------------------------------------- |
| `id`      | `string`                | Unique tab identifier                                            |
| `label`   | `string`                | Tab label text                                                   |
| `index`   | `boolean?`              | Accepted for API parity with web; not used in RN v1              |
| `variant` | `"default" \| "upsell"` | Accepted for API parity with web; not visually distinct in RN v1 |
| `onClick` | `() => void`            | Optional extra callback on press, in addition to state change    |

## Architecture Notes

- Single flat component — no namespace variants needed for this use case
- Animation: Reanimated `useSharedValue` + `withSpring` for the underline; pill is a static `View` toggled instantly (mirrors web CSS class toggle)
- Both controlled and uncontrolled modes share a single `useState` initialised from `activeTabId ?? tabs[0].id`
- Tab layout positions collected via `onLayout` on each tab `View`; first active-tab layout sets indicator position directly without spring to avoid slide-from-zero on mount
- Accessibility: `accessibilityRole="tablist"` on the scroll container, `accessibilityRole="tab"` + `accessibilityState={{ selected }}` on each tab
