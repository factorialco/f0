## Status Persistence

Status Persistence saves user preferences (filters, sorting, view mode) across sessions using a storage provider.

**Props:**
- `id`: (Required for persistence) A unique string in the format `{name}/{version}`.
- `storage`: (Optional) Boolean or configuration object. Set to `false` to disable.

```tsx
<OneDataCollection
  id="user-list/v1"
  storage={{
    features: ['filters', 'sort', 'viewMode', 'search']
  }}
  source={source}
/>
```

**Edge Cases & Gotchas:**
- **Versioning**: The version (e.g., `/v1`) is critical. You **must** increment it if you make breaking changes to the filter schema or column definitions to avoid restoring incompatible states.
- **Storage Key**: If `id` is missing, persistence is automatically disabled.