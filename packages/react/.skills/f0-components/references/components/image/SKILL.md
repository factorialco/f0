---
name: image-component
description: Standard component for rendering images with support for dimensions and accessibility. Use for all visual assets to ensure consistent layout and screen reader support.
---

# Image

The `Image` component is a specialized wrapper for rendering visual assets. it ensures that images are handled consistently across the application, with a focus on accessibility and preventing layout shifts.

## Props

- **alt** (optional): `string` - Descriptive text for the image. Essential for screen readers and SEO.
- **height** (optional): `number` - The intrinsic height of the image in pixels.
- **src** (optional): `string` - The URL or path to the image source.
- **width** (optional): `number` - The intrinsic width of the image in pixels.

## Usage Examples

### Basic Usage
Standard implementation for displaying an image with alternative text.

```tsx
import { Image } from './Image';

const Example = () => (
  <Image 
    src="https://images.unsplash.com/photo-123456789" 
    alt="A scenic view of the mountains during sunrise" 
  />
);
```

### Fixed Dimensions
Using `width` and `height` to reserve space in the layout, which prevents Cumulative Layout Shift (CLS) as the image loads.

```tsx
import { Image } from './Image';

const Logo = () => (
  <Image 
    src="/assets/logo.svg" 
    alt="Company Logo" 
    width={200} 
    height={50} 
  />
);
```

## Best Practices

- **Accessibility**: Always provide a meaningful `alt` attribute. If the image is purely decorative and adds no informational value, use an empty string (`alt=""`) so screen readers skip it.
- **Performance**: Provide `width` and `height` whenever the aspect ratio is known. This allows the browser to calculate the layout before the image file has finished downloading.
- **Broken Images**: Ensure the `src` path is valid. Consider implementing a fallback UI or placeholder if the image fails to load.

## Accessibility

- The `alt` prop is the most critical accessibility feature. It should describe the "why" of the image, not just the "what."
- Avoid starting alt text with "Image of..." or "Picture of...", as assistive technologies already announce the element as an image.

## Related Skills

For components that provide layout constraints for images, see the skill in ./references/aspect-ratio.md.
For displaying a collection of images, see the skill in ./references/gallery.md.