F0 represents a transformative reboot of the visual language for the Factorial
platform. Its core mission is to enhance consistency and coherence across
Factorial's user interface, while ensuring a quick, efficient, and delightful
user and developer experience.

## Why F0?

As Factorial has evolved, it has expanded into a complex suite of features and
functionalities, resulting in a fragmented user experience. Various sections of
the platform display inconsistent visual styles and interactions.

This fragmentation complicates maintenance and scalability of both our user
experience and codebase. We often find ourselves dedicating excessive time to
reinventing the wheel and resolving bugs and inconsistencies instead of
enhancing our product, and our users are left with a confusing, disjointed
experience.

## Why Reboot Our Design System?

Our existing design system, known as "Gamma," was established on informal
constraints that have not withstood the test of time. Despite adding new
components and styles, the underlying foundations have weakened to the point
they have mostly become useless.

After thorough evaluation, we've decided that a fresh start is essential. We
need to distinctly separate our old design rules from the new, establishing a
foundation that supports future growth.

Here are several benefits of rebooting our design system:

- **Clear Vision**: A design system thrives on constraints. Previously, as we
  added components and styles without a clear direction, complexity grew,
  leading to a system that was difficult to use effectively.
- **Fully Responsive**: We aim to provide abstractions that facilitate the
  creation of responsive interfaces across all devices, complementing our mobile
  application and ensuring consistency.
- **Usability for External Developers**: With well-documented and easy-to-use
  components, external developers can potentially seamlessly integrate with our
  look and feel and build upon the Factorial ecosystem.
- **Accessibility**: Ensuring that our platform is accessible to everyone,
  regardless of their abilities, is a priority. This means focusing on the
  accessibility of our components.
- **Robustness**: Our goal is to make every interaction with F0 exceptional.
  This includes comprehensive testing of components to maintain consistency and
  coherence.

## Principles

- **Consistency**: With Factorial's vast features, a consistent visual language
  is key to helping users navigate and leverage their experiences across the
  platform.
- **Efficiency**: Designed for efficiency, F0 aids users in completing tasks
  swiftly and seamlessly.
- **Enjoyability**: We aim for users to enjoy their interaction with Factorial.
  A visually appealing and coherent experience is central to F0.

## Technical Choices

F0 is crafted using leading technologies:

- **React**: This design system is built on React, the leading JavaScript
  library for building user interfaces.
- **TypeScript**: Utilized for robust, maintainable code and enhanced developer
  experience with amazing developer tooling.
- **Tailwind**: Our choice for a utility-first CSS framework, promoting quick,
  consistent UI development.
- **Shadcn** and **Radix** for a powerful and accessible baseline for our
  components.

# How to Use F0?

To integrate F0, install it as a dependency:

$ pnpm install @factorialco/f0-react

Import its styles in your application (typically in main.tsx or similar):

```tsx
import "@factorialco/f0-react/dist/styles.css"
```

You can then utilize any of its components:

```
import { Button } from "@factorialco/f0-react"
```
