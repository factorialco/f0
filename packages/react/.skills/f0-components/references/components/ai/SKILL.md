---
name: sds-ai
description: A comprehensive suite of AI-driven UI components for building conversational interfaces, agentic workflows, and interactive AI widgets. Use when implementing chat assistants, agent status indicators, or human-in-the-loop (HIL) confirmations.
---
## Overview
The SDS AI component library provides specialized UI elements designed for AI-human interaction. It ranges from low-level animations (Aura) to high-level interactive widgets (Question Cards, FAQ Cards) and standard chat interface elements.

## Core Components

### Chat Interface
- **F0AiChat**: The primary container for conversational interfaces. Supports footers, data tables, and markdown rendering.
- **F0AiChatTextArea**: A specialized input field for AI chat, supporting multiple placeholders and "in-progress" states.
- **F0MarkdownRenderers**: Custom renderers for AI-generated markdown, including support for code blocks, tables, and typography.

### Agent Status & Reasoning
- **F0Thinking**: Displays the agent's internal reasoning process or "thoughts" to the user. Use this to maintain engagement during long-running generations.
- **F0AuraVoiceAnimation**: A visual representation of the agent's state (Idle, Listening, Thinking, Speaking). Driven by the `state` prop.
- **F0ActionItem**: A status-driven card used to show the progress of specific background tasks or agent actions.

### Interactive Widgets
- **F0QuestionCard**: A multi-step interactive card for data collection. Use this when the agent needs to ask the user for specific structured input.
- **F0FAQCard**: An accordion-style card for displaying common questions and answers.
- **F0HILActionConfirmation**: A "Human-In-The-Loop" component for requesting user approval before the agent performs a sensitive action.

## Props

- **cancelText** (required): `string` - Text displayed on the cancel button.
- **children** (required): `ReactNode` - Content to show when expanded or within the chat container.
- **confirmationText** (required): `string` - Text displayed on the confirmation button.
- **description** (required): `string` - Description text below the title in cards.
- **icon** (required): `ReactNode` - Icon to display in the collapsible trigger or header.
- **items** (required): `Array<{ id, question, answer }>` - Data for FAQ components.
- **messages** (required): `Array<string>` - Array of thinking/reflection messages to display in the Thinking component.
- **module** (required): `string` - Module ID for icon mapping (e.g., 'company_projects').
- **moduleName** (required): `string` - Module name displayed in titles.
- **onCancel** (required): `function` - Callback fired when the cancel button is clicked.
- **onConfirm** (required): `function` - Callback fired when the confirmation button is clicked.
- **preview** (required): `ReactNode` - Content for the preview area (image, video, or custom).
- **sources** (required): `Array<Source>` - Array of sources to display for citations.
- **steps** (required): `Array<{ question, options }>` - Configuration for multi-step question cards.
- **title** (required): `string` - The title text displayed next to status icons or in headers.
- **actionHref** (optional): `string` - URL for the action button.
- **allowMultiple** (optional): `boolean` - Whether multiple FAQ items can be expanded at once. Default: `false`.
- **color** (optional): `string` - Primary color of the Aura animation.
- **inProgress** (optional): `boolean` - Whether the chat or action is currently active.
- **isActive** (optional): `boolean` - Specifically for the Thinking component to drive the active animation.
- **sendAsMessage** (optional): `boolean` - When true, completing a QuestionCard sends selected labels via `onSendMessage`. Default: `false`.
- **size** (optional): `'icon' | 'sm' | 'md' | 'lg' | 'xl'` - Size of the Aura animation. Default: `'lg'`.
- **state** (optional): `'idle' | 'listening' | 'thinking' | 'speaking'` - Agent state driving the Aura animation intensity.
- **status** (optional): `'pending' | 'in-progress' | 'completed' | 'error'` - Current status of an action item.

## Usage Examples

### Displaying Agent Reasoning
Use the `F0Thinking` component to show the user what the agent is currently doing.

```tsx
import { F0Thinking } from '@sds/ai';

const Reasoning = () => (
  <F0Thinking 
    isActive={true}
    messages={[
      "Searching internal documentation...",
      "Analyzing project requirements...",
      "Synthesizing response..."
    ]}
  />
);
```

### Human-In-The-Loop Confirmation
Use `F0HILActionConfirmation` when an agent needs permission to execute a tool or API call.

```tsx
import { F0HILActionConfirmation } from '@sds/ai';

const ConfirmAction = () => (
  <F0HILActionConfirmation 
    title="Deploy to Production"
    description="This will push the current build to the live environment."
    confirmationText="Deploy Now"
    cancelText="Review Changes"
    onConfirm={() => handleDeploy()}
    onCancel={() => handleReview()}
  />
);
```

### Structured Questioning
Use `F0QuestionCard` to guide users through a selection process.

```tsx
import { F0QuestionCard } from '@sds/ai';

const OnboardingQuestions = () => (
  <F0QuestionCard 
    title="Project Setup"
    steps={[
      {
        question: "Which department is this for?",
        options: [
          { id: 'eng', label: 'Engineering' },
          { id: 'mkt', label: 'Marketing' }
        ]
      }
    ]}
    sendAsMessage={true}
    onSendMessage={(val) => console.log(val)}
  />
);
```

## Best Practices
- **Maintain Feedback**: Always use `F0Thinking` or `F0AuraVoiceAnimation` during LLM latency to prevent the user from thinking the app has frozen.
- **Contextual Sources**: When providing AI answers based on documents, always use `F0MessageSources` to provide transparency and trust.
- **Progressive Disclosure**: Use `F0AiCollapsibleMessage` for long technical details or logs that might clutter the main chat thread.

## Related Skills
- For markdown rendering specifics, see the skill in ./references/f0-markdown-renderers.md
- For voice-specific interactions, see the skill in ./references/f0-aura-voice-animation.md
- For specialized widget implementations, see the skill in ./references/widgets.md

## Sub-components

- **F0ActionItem**: See ./references/f0actionitem.md
- **F0AiChat**: See ./references/f0aichat.md
- **F0AiChatTextArea**: See ./references/f0aichattextarea.md
- **F0AiCollapsibleMessage**: See ./references/f0aicollapsiblemessage.md
- **F0AuraVoiceAnimation**: See ./references/f0auravoiceanimation.md
- **F0HILActionConfirmation**: See ./references/f0hilactionconfirmation.md
- **F0MarkdownRenderers**: See ./references/f0markdownrenderers.md
- **F0MessageSources**: See ./references/f0messagesources.md
- **F0OneIcon**: See ./references/f0oneicon.md
- **F0OneSwitch**: See ./references/f0oneswitch.md
- **F0Thinking**: See ./references/f0thinking.md
- **Widgets**: See ./references/widgets.md