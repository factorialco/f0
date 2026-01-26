import { F0Link } from "@/components/F0Link/F0Link"

export function A({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <F0Link {...props} variant="link" href={props.href}>
      {children}
    </F0Link>
  )
}
