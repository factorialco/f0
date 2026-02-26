## Communities

The `Communities` module is a collection of components designed for internal social feeds. It includes `CommunityPost` for standard updates, `Celebration` for milestones, and `PostDescription` for rich-text content.

### CommunityPost
The primary component for feed items, supporting text, media, and interactive elements.

**Props:**
- `author`: `{ name: string, avatar?: string }` (Optional) - Details of the user who created the post.
- `content`: `ReactNode` (Required) - The body of the post, usually a `PostDescription`.
- `image`: `string` (Optional) - URL for an attached image.
- `video`: `string` (Optional) - URL for an attached video.
- `event`: `{ title: string, date: string, location: string }` (Optional) - Renders an event card within the post.
- `reactions`: `Array<{ emoji: string, count: number, active: boolean }>` (Optional) - Social reactions.
- `customButtons`: `Array<{ label?: string, onClick: () => void, icon?: string }>` (Optional) - Action buttons for the post footer.
- `isLoading`: `boolean` (Default: `false`) - Renders a skeleton state.

### PostDescription
A specialized text renderer that handles rich formatting, mentions, and hashtags.

**Props:**
- `text`: `string` (Required) - The raw text or HTML-like string to be parsed.
- `isCollapsed`: `boolean` (Default: `false`) - If true, truncates long text with a "Show more" option.
- `onMentionClick`: `(userId: string) => void` (Optional) - Callback for when a @mention is clicked.

```tsx
import { CommunityPost, PostDescription } from '@sds/home';

const FeedItem = () => (
  <CommunityPost
    author={{ name: "Jane Doe", avatar: "/path/to/avatar.png" }}
    content={
      <PostDescription 
        text="Kudos to @John for the amazing work on #ProjectX! 🚀" 
      />
    }
    image="/path/to/celebration.jpg"
    reactions={[{ emoji: "⭐", count: 5, active: true }]}
  />
);
```

**Edge Cases & Gotchas:**
- **Rich Text Formatting**: `PostDescription` supports specific markers for highlights, code snippets, and links. Ensure input strings follow the expected internal schema for mentions.
- **Skeleton States**: Both `CommunityPost` and `Celebration` have built-in skeleton variants. Use `isLoading` to maintain layout stability during data fetching.
- **Media Priority**: If both `image` and `video` are provided, the component behavior may vary (usually prioritizing video or rendering both in a specific order).