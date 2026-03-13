# F0Avatar

Namespaced avatar component for the F0 React Native design system. Provides semantic variants for rendering user, team, company, emoji, file, icon, flag, alert, date, and module avatars.

## Architecture

F0Avatar follows the same namespace pattern as `F0Tag`:

- **Root (`F0Avatar`)**: Polymorphic dispatcher that accepts an `avatar: F0AvatarVariant` discriminated union and delegates to the appropriate variant.
- **Variants (`F0Avatar.Person`, `F0Avatar.Team`, etc.)**: Thin semantic wrappers around existing avatar components. Each normalizes sizes to the Figma-aligned scale and blocks non-semantic props.
- **Namespace assembly**: `Object.assign(F0AvatarRoot, { Person, Team, ... })` attaches variants to the root.

The root is useful for data-driven rendering (e.g., server-driven UI where avatar type comes from an API). For static usage, prefer the namespaced variants directly.

## Usage

### Namespaced variants (preferred)

<!-- prettier-ignore -->
```tsx
<F0Avatar.Person firstName="Jane" lastName="Doe" size="md" />
<F0Avatar.Company name="Factorial" size="lg" badge={{ type: "module", module: "home" }} />
<F0Avatar.Alert alertType="critical" size="sm" />
<F0Avatar.Flag flag="ES" size="md" />
<F0Avatar.Module module="calendar" size="lg" />
```

### Polymorphic root

<!-- prettier-ignore -->
```tsx
<F0Avatar
  avatar={{ type: "person", firstName: "Ada", lastName: "L" }}
  size="md"
/>
```

## Props

### Root (`F0Avatar`)

| Prop     | Type              | Default  | Description                         |
| -------- | ----------------- | -------- | ----------------------------------- |
| `avatar` | `F0AvatarVariant` | required | Discriminated union keyed by `type` |
| `size`   | `F0AvatarSize`    | `"xs"`   | Size (passed to the variant)        |

### F0Avatar.Person

| Prop          | Type           | Default  | Description                    |
| ------------- | -------------- | -------- | ------------------------------ |
| `firstName`   | `string`       | required | First name                     |
| `lastName`    | `string`       | required | Last name                      |
| `src`         | `string?`      | —        | Photo URL                      |
| `size`        | `F0AvatarSize` | `"xs"`   | xs/sm/md/lg/xl/2xl             |
| `badge`       | `AvatarBadge?` | —        | Badge overlay (module or icon) |
| `deactivated` | `boolean?`     | —        | Shows deactivated icon         |

### F0Avatar.Team / F0Avatar.Company

| Prop    | Type           | Default  | Description        |
| ------- | -------------- | -------- | ------------------ |
| `name`  | `string`       | required | Team/company name  |
| `src`   | `string?`      | —        | Logo URL           |
| `size`  | `F0AvatarSize` | `"xs"`   | xs/sm/md/lg/xl/2xl |
| `badge` | `AvatarBadge?` | —        | Badge overlay      |

### F0Avatar.Emoji

| Prop    | Type                  | Default  | Description |
| ------- | --------------------- | -------- | ----------- |
| `emoji` | `string`              | required | Emoji name  |
| `size`  | `F0AvatarUtilitySize` | `"sm"`   | sm/md/lg    |

### F0Avatar.Icon

| Prop   | Type                  | Default  | Description    |
| ------ | --------------------- | -------- | -------------- |
| `icon` | `IconType`            | required | Icon component |
| `size` | `F0AvatarUtilitySize` | `"sm"`   | sm/md/lg       |

### F0Avatar.File

| Prop    | Type           | Default  | Description        |
| ------- | -------------- | -------- | ------------------ |
| `file`  | `FileLike`     | required | `{ name, type? }`  |
| `size`  | `F0AvatarSize` | `"md"`   | xs/sm/md/lg/xl/2xl |
| `badge` | `AvatarBadge?` | —        | Badge overlay      |

### F0Avatar.Flag

| Prop   | Type               | Default  | Description                     |
| ------ | ------------------ | -------- | ------------------------------- |
| `flag` | `string`           | required | ISO 3166-1 alpha-2 country code |
| `size` | `F0AvatarFlagSize` | `"xs"`   | xs/sm/md/lg                     |

### F0Avatar.Alert

| Prop        | Type                  | Default  | Description                    |
| ----------- | --------------------- | -------- | ------------------------------ |
| `alertType` | `F0AvatarAlertType`   | required | critical/warning/info/positive |
| `size`      | `F0AvatarUtilitySize` | `"sm"`   | sm/md/lg                       |

### F0Avatar.Date

| Prop   | Type   | Default  | Description     |
| ------ | ------ | -------- | --------------- |
| `date` | `Date` | required | Date to display |

### F0Avatar.Module

| Prop     | Type                 | Default  | Description             |
| -------- | -------------------- | -------- | ----------------------- |
| `module` | `ModuleId`           | required | Factorial app module ID |
| `size`   | `F0AvatarModuleSize` | `"lg"`   | xxs/xs/sm/md/lg/xl      |

## Size Scales

### Main avatars (Person, Company, Team, File)

| Token | Pixels |
| ----- | ------ |
| `xs`  | 20px   |
| `sm`  | 24px   |
| `md`  | 32px   |
| `lg`  | 40px   |
| `xl`  | 56px   |
| `2xl` | 72px   |

### Utility avatars (Emoji, Icon, Alert)

| Token | Pixels |
| ----- | ------ |
| `sm`  | 24px   |
| `md`  | 32px   |
| `lg`  | 40px   |

### Flag

| Token | Pixels |
| ----- | ------ |
| `xs`  | 20px   |
| `sm`  | 24px   |
| `md`  | 32px   |
| `lg`  | 40px   |

### Module

| Token | Pixels |
| ----- | ------ |
| `xxs` | 10px   |
| `xs`  | 12px   |
| `sm`  | 16px   |
| `md`  | 20px   |
| `lg`  | 24px   |
| `xl`  | 32px   |

## Accessibility

- Person, Team, Company avatars support `aria-label` and `aria-labelledby`.
- Flag and Alert avatars set `accessibilityRole="image"` with descriptive `accessibilityLabel`.
- Module avatars set `accessibilityRole="image"`.

## Testing

Tests cover:

1. Namespace contract (all variants are defined on `F0Avatar`).
2. Snapshot coverage for each variant with key prop combinations.
3. Size variant snapshots.
4. Polymorphic root rendering.

Run tests: `pnpm test -- --watchman=false`

## File Structure

```
F0Avatar/
  F0Avatar.tsx              # Namespace assembly + polymorphic root
  F0Avatar.types.ts         # Types, size constants, discriminated union
  F0Avatar.styles.ts        # tv() variants for Alert and Flag containers
  F0AvatarPerson.tsx        # Person variant wrapper
  F0AvatarTeam.tsx          # Team variant wrapper
  F0AvatarCompany.tsx       # Company variant wrapper
  F0AvatarEmoji.tsx         # Emoji variant wrapper
  F0AvatarFile.tsx          # File variant wrapper
  F0AvatarIcon.tsx          # Icon variant wrapper
  F0AvatarFlag.tsx          # Flag variant (new)
  F0AvatarAlert.tsx         # Alert variant (new)
  F0AvatarDate.tsx          # Date variant wrapper
  F0AvatarModule.tsx        # Module variant wrapper
  F0Avatar.md               # This file
  index.ts                  # Barrel exports
  __tests__/
    F0Avatar.spec.tsx
    __snapshots__/
```
