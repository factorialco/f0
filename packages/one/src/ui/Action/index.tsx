// Re-export Action types and create minimal wrapper using Action from @factorialco/f0-react
// Since Action is not publicly exported from @factorialco/f0-react, we create a minimal implementation
export type {
  ActionButtonProps,
  ActionButtonVariant,
  ActionCommonProps,
  ActionLinkProps,
  ActionLinkVariant,
  ActionProps,
  ActionSize,
  ActionVariant,
} from "@factorialco/f0-react/ui/Action/types"

// For now, we'll need to import Action from the internal path
// This is a workaround until Action is exported from @factorialco/f0-react
// @ts-expect-error - Action is not exported but exists in the package
export { Action } from "@factorialco/f0-react/ui/Action"
