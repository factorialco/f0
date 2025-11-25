// Re-export ButtonCopy from @factorialco/f0-react
// Since ButtonCopy is not publicly exported, we import from internal path
// @ts-expect-error - ButtonCopy is not exported but exists in the package
export {
  ButtonCopy,
  type ButtonCopyProps,
} from "@factorialco/f0-react/ui/ButtonCopy"
