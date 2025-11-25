// Re-export ButtonInternal from @factorialco/f0-react
// Since ButtonInternal is not publicly exported, we import from internal path
// @ts-expect-error - ButtonInternal is not exported but exists in the package
export {
  ButtonInternal,
  type ButtonInternalProps,
} from "@factorialco/f0-react/components/F0Button/internal"
