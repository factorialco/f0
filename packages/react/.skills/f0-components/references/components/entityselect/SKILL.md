---
name: entity-select
description: A versatile form component for selecting one or multiple entities (users, teams, or items) from a searchable, filterable list. Use when users need to pick from a list of named items with visual identifiers like avatars.
---
## Overview
The `EntitySelect` component provides a robust interface for entity selection. It supports single and multiple selection modes, hierarchical grouping, and an "always open" state for persistent visibility. It is commonly used for employee pickers, team assignments, and resource selection.

## Props
- **entity** (required): `EntitySelectEntity` - The entity object containing id, name, avatar, and metadata.
- **expanded** (required): `boolean` - Controls the expanded state of the component.
- **groupView** (required): `boolean` - Whether to display entities organized into groups.
- **onExpand** (required): `(expanded: boolean) => void` - Callback triggered when the expansion state changes.
- **onRemove** (required): `(entity: EntitySelectEntity) => void` - Callback triggered when an entity is removed from selection.
- **partialSelected** (required): `boolean` - Indicates if a group has some but not all children selected.
- **search** (required): `string` - The current search query string.
- **selected** (required): `boolean` - Whether the current entity is selected.
- **selectedEntities** (required): `EntitySelectEntity[]` - Array of currently selected entity objects.
- **children** (optional): `ReactNode` - Custom content to render within the component.
- **clearLabel** (optional): `string` - Label for the "Clear" action button.
- **deactivated** (optional): `boolean` - Whether the component or specific item is in a deactivated state. Default: `false`.
- **disabled** (optional): `boolean` - Disables user interaction.
- **entities** (optional): `EntitySelectEntity[]` - The list of available entities to select from.
- **error** (optional): `string` - Error message to display for validation.
- **groups** (optional): `any[]` - Data structure for hierarchical/grouped views.
- **hiddenAvatar** (optional): `boolean` - Hides the entity avatars when true. Default: `false`.
- **hideLabel** (optional): `boolean` - Hides the component label.
- **hint** (optional): `string` - Helper text displayed below the field.
- **loading** (optional): `boolean` - Displays a loading state. Default: `false`.
- **onCreate** (optional): `() => void` - Callback for creating a new entity if it doesn't exist.
- **onCreateLabel** (optional): `string` - Label for the creation action.
- **onSelect** (optional): `(entity: EntitySelectEntity) => void` - Callback triggered when an entity is selected.
- **open** (optional): `boolean` - Controls the visibility of the dropdown.
- **placeholder** (optional): `string` - Placeholder text for the trigger element.
- **readonly** (optional): `boolean` - Prevents modification while maintaining focusability. Default: `false`.
- **required** (optional): `boolean` - Marks the field as required. Default: `false`.
- **searchPlaceholder** (optional): `string` - Placeholder text for the search input field.
- **singleSelector** (optional): `boolean` - When true, limits selection to a single entity.
- **size** (optional): `string` - Size variant of the component (e.g., "sm"). Default: "sm".
- **width** (optional): `number` - Custom width for the component.

## Usage Examples

### Multiple Selection (Default)
```tsx
import { EntitySelect } from '@factorial/ds';

const MyComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <EntitySelect
      label="Select Team Members"
      entities={allEmployees}
      selectedEntities={selected}
      onSelect={(entity) => setSelected([...selected, entity])}
      onRemove={(entity) => setSelected(selected.filter(e => e.id !== entity.id))}
      placeholder="Choose employees..."
    />
  );
};
```

### Single Selection Mode
Use `singleSelector` to restrict the user to picking only one item.
```tsx
<EntitySelect
  singleSelector
  label="Select Manager"
  entities={managers}
  selectedEntities={selectedManager ? [selectedManager] : []}
  onSelect={(entity) => setSelectedManager(entity)}
/>
```

## Variants

### EmployeeSelector
A specialized implementation of `EntitySelect` optimized for employee data.
For the EmployeeSelector specific implementation, see the skill in ./references/employee-selector.md

### Grouped View
Handles hierarchical data structures where entities are organized into parent-child relationships (e.g., Departments > Employees).

### Always Open Mode
A variant where the selection list remains visible and expanded, useful for sidebar filters or dedicated selection screens.

## Best Practices
- **Searchability**: Always provide a `searchPlaceholder` that describes what the user can search for (e.g., "Search by name or email").
- **Avatars**: Keep `hiddenAvatar` as `false` for people-based entities to improve visual recognition.
- **Empty States**: Use `notFoundTitle` and `notFoundSubtitle` to guide users when a search returns no results.
- **Feedback**: Use the `loading` prop when fetching entities asynchronously to prevent users from thinking the component is broken.

## Related Components
- For the individual items within the list, see the skill in ./references/list-item.md
- For the tags representing selected entities, see the skill in ./references/list-tag.md
- For the trigger element that opens the select, see the skill in ./references/trigger.md

## Sub-components

- **EmployeeSelector**: See ./references/employeeselector.md
- **EntitySelect**: See ./references/entityselect.md
- **ListItem**: See ./references/listitem.md
- **ListTag**: See ./references/listtag.md
- **Trigger**: See ./references/trigger.md