// Re-export from @factorialco/f0-react if available, otherwise use local implementation
// Note: cn and focusRing are not publicly exported from @factorialco/f0-react
// so we provide local implementations
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function focusRing(extraClasses?: string) {
  return cn(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
    extraClasses
  )
}
