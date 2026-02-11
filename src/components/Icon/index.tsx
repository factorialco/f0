/**
 * Icon component exports
 *
 * This file provides backward compatibility while transitioning to F0Icon.
 *
 * @deprecated Import from primitives/Icon for new code
 * @see primitives/Icon/F0Icon.md for documentation
 */

// Export new F0Icon component and types from primitives
export { F0Icon } from "../primitives/Icon";
export type { F0IconProps, IconType } from "../primitives/Icon";
export { applyIconInterop } from "../primitives/Icon";

// Backward compatibility: Re-export F0Icon as Icon
export { F0Icon as Icon } from "../primitives/Icon";

// Legacy type exports for backward compatibility
export type { F0IconProps as IconProps } from "../primitives/Icon";
