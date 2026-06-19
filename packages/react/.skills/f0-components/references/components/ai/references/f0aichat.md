## F0AiChat

`F0AiChat` is the primary container for AI conversational interfaces. It manages the layout of messages, the input area, and various assistant states like loading or partial content streaming.

**Props:**
- `messages`: `Array<Message>` (Required) - List of message objects containing role and content.
- `isLoading`: `boolean` (Optional) - Shows a global loading state for the assistant.
- `onSendMessage`: `(message: string) => void` (Required) - Callback triggered when a user submits text.
- `footer`: `ReactNode` (Optional) - Custom content to display below the chat input.
- `welcomeMessage`: `string` (Optional) - Initial message shown when the chat is empty.

```tsx
import { F0AiChat } from '@sds/ai';

const MyChat = () => {
  const handleSend = (text: string) => console.log('User said:', text);

  return (
    <F0AiChat
      onSendMessage={handleSend}
      messages={[
        { role: 'assistant', content: 'Hello! How can I help you today?' },
        { role: 'user', content: 'Tell me about my projects.' }
      ]}
      footer={<p>Ask about time, people, or company info.</p>}
    />
  );
};
```

**Edge Cases & Gotchas:**
- When streaming content, ensure the `messages` array is updated frequently to provide a smooth "typing" experience.
- For complex markdown, use `F0MarkdownRenderers` within the message content.