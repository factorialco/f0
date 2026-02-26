## F0AuraVoiceAnimation

A visual feedback component for voice-based AI interactions. It provides distinct animations for different states of the voice assistant.

**Props:**
- `state`: `'idle' | 'listening' | 'thinking' | 'speaking'` (Required) - Controls the animation pattern.
- `size`: `'sm' | 'md' | 'lg'` (Default: `'md'`) - The dimensions of the animation.
- `color`: `string` (Optional) - Custom hex or CSS color for the aura.
- `theme`: `'light' | 'dark'` (Default: `'light'`) - Adjusts contrast for the background.

```tsx
import { F0AuraVoiceAnimation } from '@sds/ai';

const VoiceInterface = () => (
  <div className="voice-container">
    <F0AuraVoiceAnimation state="listening" />
    <p>I'm listening...</p>
  </div>
);
```

**Edge Cases & Gotchas:**
- Ensure the `state` prop is synced accurately with the actual microphone/API status to avoid user confusion.