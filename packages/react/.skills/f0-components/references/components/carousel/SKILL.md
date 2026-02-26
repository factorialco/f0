---
name: carousel
description: Use to display a collection of items in a horizontal scrolling container. Ideal for featured content, galleries, or testimonials where screen space is limited and content is sequential.
---
# Carousel

The `Carousel` component provides a flexible way to display multiple items (images, cards, or widgets) in a swipeable or clickable horizontal layout. It supports responsive column counts, automatic scrolling, and visual cues like "sneak peeks" to indicate more content is available.

## Props

- **autoplay** (optional): `boolean` - Whether to automatically scroll through the slides. Defaults to `false`.
- **children** (optional): `ReactNode[]` - The items to be rendered within the carousel slides.
- **columns** (optional): `Record<string, number>` - An object specifying the number of items to display at different responsive breakpoints.
- **showArrows** (optional): `boolean` - Whether to display navigation arrows on the sides of the carousel.
- **showDots** (optional): `boolean` - Whether to display pagination dots at the bottom.
- **showPeek** (optional): `boolean` - Whether to show a partial view of the next slide to encourage scrolling.

## Usage Examples

### Basic Carousel
Standard implementation with navigation arrows and pagination dots.

```tsx
import { Carousel } from './Carousel';

const MyComponent = () => (
  <Carousel showArrows showDots>
    <div className="item">Slide 1</div>
    <div className="item">Slide 2</div>
    <div className="item">Slide 3</div>
  </Carousel>
);
```

### Responsive Columns
Define how many items are visible based on screen size.

```tsx
const columnsConfig = {
  mobile: 1,
  tablet: 2,
  desktop: 4
};

<Carousel columns={columnsConfig}>
  {items.map(item => <Card key={item.id} {...item} />)}
</Carousel>
```

### Auto-Scrolling with Sneak Peek
Useful for hero banners or featured promotions.

```tsx
<Carousel autoplay showPeek>
  <Banner src="/img1.jpg" />
  <Banner src="/img2.jpg" />
</Carousel>
```

## Variants

- **Default**: Standard manual navigation.
- **Auto Scroll**: Automatically transitions between slides; best used for high-level marketing content.
- **Sneak Peek**: Reduces the width of the active slide(s) to reveal a portion of the next item, providing a strong affordance for horizontal movement.
- **Dynamic Carousel**: A variant designed for data-driven content where items may be loaded or updated dynamically.

## Best Practices

- **Content Consistency**: Use the "Multiple Widths" configuration with caution. The carousel performs best when items have consistent dimensions.
- **Accessibility**: Ensure that `showArrows` or `showDots` are enabled if `autoplay` is active, allowing users to pause or manually control the pace.
- **Performance**: For carousels with many items, consider lazy-loading the content within the slides.
- **Responsive Design**: Always test the `columns` prop across different window sizes to ensure items don't become too cramped on smaller screens.

## Related Skills

- For individual card layouts used within slides, see the skill in ./references/card.md
- For dynamic data fetching patterns, see the skill in ./references/use-data-collection.md

## Sub-components

- **Carousel**: See ./references/carousel.md
- **DynamicCarousel**: See ./references/dynamiccarousel.md