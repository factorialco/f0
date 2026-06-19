---
name: upselling-kit
description: Use the UpsellingKit to promote new features, upgrades, or additional products to users. It provides a suite of UI components (banners, buttons, modals, popovers) designed to drive conversion and handle upsell request workflows.
---
## Overview
The `UpsellingKit` is a comprehensive set of components designed to facilitate upselling and cross-selling within the application. It handles the visual presentation of offers and the logic for requesting more information or upgrading services.

### Sub-components
- **ProductBlankslate**: Used for empty states where a product or feature can be promoted.
- **ProductCard**: A card-based layout to showcase specific product benefits.
- **ProductModal**: A detailed modal for deep-dive upselling information.
- **UpsellingBanner**: High-visibility banners for feature discovery.
- **UpsellingButton**: A specialized button with upselling visual cues.
- **UpsellingPopover**: Contextual upselling information triggered by user interaction.
- **UpsellRequestResponseDialog**: Handles the feedback loop (success/error) after an upsell request is made.

## Props
- **benefits** (required): `string[]` - List of benefits to display (array of strings).
- **closeLabel** (required): `string` - Label of the close modal button.
- **description** (required): `string` - Main descriptive text for the upsell offer.
- **errorMessage** (required): `string` - Error message displayed in the modal if the request fails.
- **image** (required): `string` - URL or path for the promotional image.
- **isOpen** (required): `boolean` - Controls whether the modal is open.
- **isVisible** (required): `boolean` - Controls the visibility of the component.
- **label** (required): `string` - The text to be displayed in the primary action button.
- **loadingState** (required): `string` - Current loading state of the button.
- **modalModule** (required): `ModuleId` - The ID of the module associated with the modal.
- **modalTitle** (required): `string` - Title displayed at the top of the modal.
- **onClick** (required): `() => void` - Callback function executed when the primary action is clicked.
- **open** (required): `boolean` - State for popover or modal visibility.
- **setIsOpen** (required): `(isOpen: boolean) => void` - Function to update the open state.
- **successMessage** (required): `string` - Success message displayed after a successful request.
- **title** (required): `string` - The main headline for the upselling component.
- **actions** (optional): `ReactNode` - Custom actions component to display.
- **align** (optional): `enum` (default: "center") - Alignment of the popover relative to the trigger.
- **disabled** (optional): `boolean` - Whether the action button is disabled.
- **dismissable** (optional): `boolean` (default: false) - Whether the component can be dismissed by the user.
- **hideLabel** (optional): `boolean` - If true, hides the text label and shows only the icon.
- **icon** (optional): `object` - Icon configuration for the button or banner.
- **isLoading** (optional): `boolean` - Shows a skeleton loading state.
- **loading** (optional): `boolean` - Whether the button is in a loading state.
- **mediaUrl** (optional): `string` - URL for video or rich media content.
- **module** (optional): `ModuleId` - Module identifier for tracking or logic.
- **moduleName** (optional): `string` - Human-readable name of the module.
- **nextSteps** (optional): `string` - Text describing what happens after the request.
- **onClose** (optional): `() => void` - Callback triggered when the component is closed.
- **onModalStateChange** (optional): `(open: boolean) => void` - Callback to notify when the modal state changes.
- **onRequest** (optional): `Function` - Specific function to execute when the upsell request is initiated.
- **portalContainer** (optional): `HTMLElement` - Container to render the portal into.
- **primaryAction** (optional): `string` - Label for the primary action button.
- **promoTag** (optional): `{ label: string, variant?: Variant }` - Configuration for a promotional tag/badge.
- **secondaryAction** (optional): `string` - Label for the secondary action button.
- **showConfirmation** (optional): `boolean` (default: true) - Whether to show a confirmation dialog after the request.
- **showIcon** (optional): `boolean` (default: true) - Whether to show the Upsell icon.
- **showResponseDialog** (optional): `boolean` (default: true) - Whether to show the success/error dialog.
- **side** (optional): `enum` (default: "right") - Side of the trigger where the popover appears.
- **size** (optional): `string` - Size variant of the button (e.g., "sm", "md", "lg").
- **subtitle** (optional): `string` - Secondary headline text.
- **success** (optional): `boolean` (default: true) - Determines if the response dialog shows a success or error state.
- **tag** (optional): `{ label: string, icon: IconType }` - Tag configuration for the component.
- **trackVisibility** (optional): `boolean` - Enables visibility tracking for analytics.
- **variant** (optional): `string` - Visual variant of the component.
- **width** (optional): `string` (default: "300px") - Width of the popover.
- **withShadow** (optional): `boolean` (default: true) - Whether to apply a shadow effect.

## Usage Examples

### Basic Upselling Banner
```tsx
import { UpsellingBanner } from '@sds/upselling-kit';

const UpgradeBanner = () => {
  return (
    <UpsellingBanner
      title="Upgrade your plan"
      description="Access more features and better support to grow your business."
      label="View Plans"
      onClick={() => console.log('Redirecting to pricing...')}
      variant="promote"
    />
  );
};
```

### Upselling Button with Popover
```tsx
import { UpsellingButton, UpsellingPopover } from '@sds/upselling-kit';

const FeatureTrigger = () => {
  return (
    <UpsellingPopover
      title="Premium Feature"
      description="This feature is available in our Pro plan."
      label="Learn More"
      onClick={() => handleRequest()}
    >
      <UpsellingButton label="Unlock Feature" />
    </UpsellingPopover>
  );
};
```

## Best Practices
- **Contextual Placement**: Place upselling components near the "locked" feature or relevant data to increase conversion.
- **Clear Benefits**: Use the `benefits` prop to list 3-5 clear value propositions rather than just technical features.
- **Non-Intrusive**: Use `UpsellingPopover` or `UpsellingBanner` for passive discovery, and `ProductModal` only when the user explicitly requests more information.
- **Loading States**: Always handle `isLoading` or `loading` props to provide feedback during asynchronous requests.

## Accessibility
- Ensure `closeLabel` is descriptive for screen readers.
- The `UpsellingButton` maintains standard button accessibility patterns, including keyboard navigation.
- Modals and Popovers manage focus trapping and "Esc" key dismissal automatically.

## Related Skills
- For ProductBlankslate, see the skill in ./references/product-blankslate.md
- For ProductCard, see the skill in ./references/product-card.md
- For ProductModal, see the skill in ./references/product-modal.md
- For UpsellingBanner, see the skill in ./references/upselling-banner.md
- For UpsellingButton, see the skill in ./references/upselling-button.md
- For UpsellingPopover, see the skill in ./references/upselling-popover.md
- For UpsellRequestResponseDialog, see the skill in ./references/upsell-request-response-dialog.md

## Sub-components

- **ProductBlankslate**: See ./references/productblankslate.md
- **ProductCard**: See ./references/productcard.md
- **ProductModal**: See ./references/productmodal.md
- **ProductWidget**: See ./references/productwidget.md
- **UpsellingBanner**: See ./references/upsellingbanner.md
- **UpsellingButton**: See ./references/upsellingbutton.md
- **UpsellingPopover**: See ./references/upsellingpopover.md
- **UpsellRequestResponseDialog**: See ./references/upsellrequestresponsedialog.md