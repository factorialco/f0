## Banners

The Banners component (specifically `BaseBanner`) is designed for promotional content, feature discovery, and onboarding experiences. It provides a visually distinct area to highlight new features, special offers, or educational content. 

**When to use:**
- To announce new product features or updates.
- To promote premium upgrades or limited-time offers.
- To provide onboarding guidance or video tutorials.
- When you need a high-impact call-to-action that is more prominent than a standard inline alert.

**When NOT to use:**
- For system-level errors or warnings (use `Alert` or `Toast` instead).
- For critical transactional feedback.
- For persistent navigation elements.

**Props:**
- `title`: `string` (Required) - The primary headline of the banner.
- `description`: `string | ReactNode` (Required) - Supporting text or elements providing more detail.
- `actions`: `ReactNode` (Optional) - Buttons or links for user interaction.
- `videoUrl`: `string` (Optional) - A URL for an embedded video player to be displayed alongside the text.
- `icon`: `ReactNode` (Optional) - A decorative or functional icon displayed at the start of the banner.
- `isLoading`: `boolean` (Optional) - When true, displays a skeleton loading state. Default: `false`.
- `fullWidth`: `boolean` (Optional) - If true, the text content expands to fill the available horizontal space. Default: `false`.
- `className`: `string` (Optional) - Additional CSS classes for custom styling.

**Usage Examples:**

### Default Banner
```tsx
import { BaseBanner, Button } from '@sds/experimental';

const MyComponent = () => (
  <BaseBanner
    title="Boost your productivity"
    description="Discover new features that will help you work more efficiently"
    actions={
      <>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    }
  />
);
```

### Banner with Video Tutorial
```tsx
import { BaseBanner } from '@sds/experimental';

const VideoBanner = () => (
  <BaseBanner
    title="New video tutorial available"
    description="Learn how to use our latest features in this comprehensive guide"
    videoUrl="https://example.com/tutorial-video.mp4"
    actions={<Button variant="primary">Watch Now</Button>}
  />
);
```

### Informational Banner with Icon
```tsx
import { BaseBanner } from '@sds/experimental';
import { StarIcon } from '@sds/icons';

const IconBanner = () => (
  <BaseBanner
    icon={<StarIcon />}
    title="Premium features available"
    description="Upgrade your experience with our premium features and tools"
  />
);
```

**Edge Cases & Gotchas:**
- **Experimental Status:** As part of `SDS/Experimental`, the API for this component may be subject to breaking changes.
- **Action Layout:** When providing multiple buttons in the `actions` prop, ensure they are wrapped in a fragment or container to maintain proper spacing.
- **Video Responsiveness:** The `videoUrl` prop typically triggers an internal player. Ensure the video source is accessible and supports embedding.
- **Text Length:** While `fullWidth` allows for more text, keep descriptions concise to maintain the "banner" feel. For very long content, consider a dedicated landing page.
- **Loading State:** The `isLoading` prop will hide the title, description, and actions, replacing them with skeleton placeholders. Ensure this is used during data fetching to prevent layout shift.