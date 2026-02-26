---
name: await-component
description: Declarative component for resolving promises or async values in React. Use to handle loading fallbacks and error states directly in the JSX tree without manual state management.

---

# Await

The `Await` component provides a declarative way to handle asynchronous data resolution. It manages the lifecycle of a promise, automatically switching between a fallback (loading) state, the resolved content, and an optional error state.

## Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `resolve` | `T \| Promise<T>` | Yes | The value or promise to resolve. |
| `fallback` | `ReactNode` | Yes | Content to display while the promise is pending (e.g., a Spinner or Skeleton). |
| `error` | `ReactNode` | No | Content to display if the promise is rejected. |
| `className` | `string` | No | CSS class for the wrapper element. |

## Usage Examples

### Basic Usage
Use for simple data resolution where the resolved value is a valid React node.

```tsx
import { Await } from './Await';

const fetchData = async () => "Data Loaded";

export const MyComponent = () => {
  return (
    <Await 
      resolve={fetchData()} 
      fallback={<span>Loading...</span>} 
    />
  );
};
```

### With Loading Skeletons
Use a skeleton component in the `fallback` prop to improve perceived performance. For specialized skeleton components, see the skill in `./skeleton/SKILL.md`.

```tsx
import { Await } from './Await';
import { Skeleton } from './Skeleton';

export const UserProfile = ({ userPromise }: { userPromise: Promise<string> }) => {
  return (
    <div className="container">
      <Await 
        resolve={userPromise} 
        fallback={<Skeleton className="h-4 w-full" />}
        error={<p>Failed to load user data.</p>}
      />
    </div>
  );
};
```

## Best Practices

- **Granular Loading**: Use `Await` to wrap specific parts of the UI that depend on async data, rather than the whole page, to allow other content to remain interactive.
- **Error Handling**: Always provide an `error` prop when working with network requests to prevent silent failures in the UI.
- **Stable Promises**: Avoid creating new promises directly inside the render function (e.g., `resolve={fetch(...)}`). Pass promises created outside the component or memoized to prevent unnecessary re-renders and re-fetching.

## Related Skills
- For UI loading placeholders, see the skill in `./skeleton/SKILL.md`.
- For global data fetching patterns, see the skill in `./use-query/SKILL.md`.