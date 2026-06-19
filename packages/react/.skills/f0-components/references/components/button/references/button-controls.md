## Button Controls

The Button component is a versatile interface element used for triggering actions or navigating to different URLs. It supports various visual states including loading indicators, disabled modes, and icon/emoji integrations. It automatically handles accessibility by requiring labels and providing automatic tooltips for icon-only variants.

Use this component when you need a standard call-to-action, a navigational link that looks like a button, or a compact icon-based trigger.

**Props:**

- `variant`: `string` - The visual style of the button (e.g., primary, secondary, ghost).
- `onClick`: `(event: MouseEvent) => void | Promise<void>` - Callback fired when clicked. Supports asynchronous functions to automatically manage loading states.
- `label`: `string` (Required) - The visible text. Essential for accessibility even if `hideLabel` is true.
- `size`: `'sm' | 'md' | 'lg'` - Sets the scale. `lg` is optimized for mobile, `md` for standard desktop, and `sm` for compact layouts.
- `icon`: `ReactNode` - Adds a decorative or functional icon alongside the label.
- `emoji`: `string` - Adds an emoji. **Note:** Using an emoji disables the text label, turning it into an icon-only button.
- `disabled`: `boolean` - Prevents user interaction and applies dimmed styling.
- `loading`: `boolean` - Replaces content with a spinner and blocks interaction.
- `hideLabel`: `boolean` - Visually hides the text label while keeping it available for screen readers.
- `tooltip`: `string` - Text shown on hover. If `hideLabel` is true and no tooltip is provided, it defaults to the `label` text.
- `href`: `string` - The destination URL. When provided, the component renders as an `<a>` tag.
- `target`: `'_blank' | '_self' | '_parent' | '_top'` - Specifies where to open the linked document (used with `href`).

### Usage Examples

#### Standard Action Button
```tsx
<Button 
  variant="primary" 
  label="Save Changes" 
  onClick={() => handleSave()} 
/>
```

#### Async Loading State
```tsx
<Button 
  variant="secondary" 
  label="Upload File" 
  onClick={async () => {
    await uploadService.post(data);
  }} 
/>
```

#### Icon-Only Button with Tooltip
```tsx
<Button 
  icon={<SettingsIcon />} 
  label="Settings" 
  hideLabel={true} 
  tooltip="Open System Settings"
/>
```

#### Navigation Link
```tsx
<Button 
  variant="ghost" 
  label="View Documentation" 
  href="https://docs.example.com" 
  target="_blank" 
/>
```

### Edge Cases and Gotchas

- **Label Requirement:** The `label` prop is mandatory for accessibility. Even if you use `hideLabel` or the `emoji` prop, the `label` provides the necessary `aria-label` for screen readers.
- **Emoji vs. Label:** Providing an `emoji` prop will suppress the rendering of the `label` text. If you need both an icon and text, use the `icon` prop instead.
- **Polymorphic Rendering:** When the `href` prop is present, the component switches from a `<button>` element to an `<a>` element. Ensure your CSS or parent selectors account for this change in DOM structure.
- **Automatic Tooltips:** If `hideLabel` is set to `true`, the component will automatically generate a tooltip using the `label` string unless a specific `tooltip` string is provided.