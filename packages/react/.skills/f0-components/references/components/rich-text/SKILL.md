---
name: rich-text
description: A comprehensive rich text editing and display suite supporting AI enhancement, file attachments, mentions, and markdown/HTML formats. Use for complex content creation and documentation.
---
## Overview
The Rich Text component suite provides a powerful interface for creating, editing, and displaying formatted content. It supports advanced features like AI-assisted writing, user mentions, file attachments, and multiple data formats (HTML/Markdown).

## Props
- **content** (required): `string` - The text content to be displayed or edited.
- **file** (required): `File` - File object associated with the content.
- **onChange** (required): `(value: { json: JSONContent | null; html: string | null }) => void` - Callback triggered when content changes.
- **placeholder** (required): `string` - Placeholder text for the editor.
- **title** (required): `string` - The title displayed in the editor header.
- **actions** (optional): `FileAction[]` [default: []] - Array of actions available for files.
- **aiBlockConfig** (optional): `AIBlockConfig` - Configuration for AI-driven content blocks.
- **banner** (optional): `BannerProps` - Configuration for an optional banner display.
- **className** (optional): `string` - Additional CSS classes for styling.
- **disabled** (optional): `boolean` [default: false] - Disables interaction with the editor.
- **enhanceConfig** (optional): `object` - Configures AI enhancement functionality, including callbacks and UI labels.
- **filesConfig** (optional): `boolean` - Configures file attachment capabilities and filtering.
- **format** (optional): `union` [default: "html"] - Content format, typically "html" or "markdown".
- **fullScreenMode** (optional): `boolean` [default: true] - Enables the fullscreen toggle functionality.
- **height** (optional): `union` [default: "auto"] - Controls the initial height of the editor.
- **imageUploadConfig** (optional): `ImageUploadConfig` - Configuration for handling image uploads.
- **initialEditorState** (optional): `string` - Initial state object containing content and title.
- **maxCharacters** (optional): `number` - Limits the number of characters allowed in the editor.
- **mentionsConfig** (optional): `object` - Configures user mention functionality and data sourcing.
- **metadata** (optional): `MetadataItem[]` - Array of metadata items to display in the header.
- **onFullscreenChange** (optional): `(fullscreen: boolean) => void` - Callback for when fullscreen mode is toggled.
- **onTitleChange** (optional): `(title: string) => void` - Callback triggered when the title is modified.
- **otherActions** (optional): `DropdownItem[]` - Additional actions provided in a dropdown menu.
- **plainHtmlMode** (optional): `boolean` [default: false] - Controls task list rendering for external displays.
- **primaryAction** (optional): `union` - Configuration for the primary header action button.
- **readonly** (optional): `boolean` [default: false] - Sets the component to a non-editable state.
- **secondaryAction** (optional): `union` - Configuration for secondary action buttons or switches.
- **secondaryActions** (optional): `HeaderSecondaryAction[]` - Array of additional header actions.
- **showBubbleMenu** (optional): `boolean` [default: false] - Enables the floating bubble menu for text formatting.
- **titlePlaceholder** (optional): `string` - Placeholder text for the title input field.

## Usage Examples

### Basic Editor Implementation
```tsx
import { RichTextEditor } from './rich-text';

const MyEditor = () => {
  const handleUpdate = ({ html }) => {
    console.log('New content:', html);
  };

  return (
    <RichTextEditor
      title="Meeting Notes"
      content="<p>Initial content...</p>"
      onChange={handleUpdate}
      placeholder="Start typing your notes..."
      showBubbleMenu={true}
    />
  );
};
```

### Read-Only Display
```tsx
import { RichTextDisplay } from './rich-text';

const MyDisplay = ({ content }) => (
  <RichTextDisplay 
    content={content} 
    format="markdown" 
  />
);
```

## Variants

### RichTextEditor
The primary interface for content creation. It includes a header for titles and actions, and a body for the Tiptap-based editor. Use this when users need to input or modify formatted text.

### RichTextDisplay
A lightweight version used strictly for rendering content. It supports GitHub Flavored Markdown and code block syntax highlighting. Use this for displaying saved notes, documentation, or comments.

### NotesTextEditor
A specialized configuration of the editor optimized for long-form note-taking, supporting tables, checklists, and blockquotes.

## Best Practices
- **Format Consistency**: Ensure the `format` prop matches the data type stored in your backend (HTML vs Markdown).
- **AI Integration**: Use `enhanceConfig` to provide users with AI-powered rewriting or summarization tools.
- **Character Limits**: Set `maxCharacters` for short-form inputs like comments or descriptions to prevent database overflows.
- **Read-Only State**: Use the `readonly` prop instead of `disabled` if you want the content to remain selectable and scrollable without allowing edits.

## Related Skills
- For file handling and attachment items within the editor, see the skill in ./references/file-item.md
- For specialized note-taking layouts and patterns, see the skill in ./references/notes-text-editor.md
- For detailed read-only rendering patterns, see the skill in ./references/rich-text-display.md
- For the core editor implementation details, see the skill in ./references/rich-text-editor.md

## Sub-components

- **FileItem**: See ./references/fileitem.md
- **NotesTextEditor**: See ./references/notestexteditor.md
- **RichTextDisplay**: See ./references/richtextdisplay.md
- **RichTextEditor**: See ./references/richtexteditor.md