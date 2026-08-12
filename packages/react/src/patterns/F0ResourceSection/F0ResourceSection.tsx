import { cn } from "@/lib/utils"
import { SectionHeader } from "@/patterns/SectionHeader"

import { F0ResourceSectionProps } from "./types"

// Static classes, one per column count, because Tailwind reads the source: a
// template string like `lg:grid-cols-${columns}` never makes it into the CSS.
// Cards step down twice on the way to narrow rather than jumping straight to
// one, so a four-across row is still two across on a tablet.
const cardColumns = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
} as const

/**
 * One section of a resource page's overview, under an optional header.
 *
 *   details      label/value fields in columns, the resource's own attributes
 *   cards        a grid of things you can open, like the teams a person is in
 *   collection   content that lays itself out: a data collection, a chart, a map
 *
 * Compose the contents as children, so a field or a card that only sometimes
 * applies is plain conditional JSX. Further variants will follow.
 */
export function F0ResourceSection({
  id,
  header,
  variant = "details",
  // Fields read best in two columns and cards in three, so the default follows
  // the variant rather than one number covering both.
  columns = variant === "cards" ? 3 : 2,
  children,
}: F0ResourceSectionProps) {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-4",
        // Sections are separated by space alone, 64px of it: the headings are
        // rule enough. Every section but the first in a stack gets it;
        // `:first-child` reads its own position, so nothing has to be passed
        // down from whatever stacks them. Half margin, half padding, and not
        // for looks: jumping here from the rail aligns to the section's border
        // box, so the padding half is what stays visible above the heading
        // after the jump.
        "[&:not(:first-child)]:mt-8 [&:not(:first-child)]:pt-8"
      )}
    >
      {header && (
        // SectionHeader carries the page gutter and, under the standard layout,
        // a negative bleed to reach it. Both are cancelled here so the heading
        // lines up with the fields instead of the page edge, and its own
        // borders with them: sections draw no rules of their own either.
        <div className="[&>div]:mx-0 [&>div]:border-0 [&>div]:px-0">
          <SectionHeader
            title={header.title}
            // SectionHeader requires the prop and renders nothing when empty.
            description={header.description ?? ""}
            action={
              header.action && {
                // Ghost by default: an Edit that belongs to a section should not
                // read as loudly as the page's own actions.
                variant: "ghost",
                ...header.action,
              }
            }
          />
        </div>
      )}
      {variant === "collection" ? (
        // Nothing of its own: a data collection, a chart or a map arrives with
        // its own width, padding and internal layout, and the section is only
        // here for the heading above it and the space around it.
        children
      ) : variant === "cards" ? (
        // Cards carry their own padding, so this grid is not pulled back the
        // way the field grid is.
        <div className={cn("grid gap-4", cardColumns[columns])}>{children}</div>
      ) : (
        <div
          className={cn(
            // `DataList` pads its label and its values by 6px, so an
            // interactive value has room around its hover chip. Pull the grid
            // back by that same 6px, or every field reads as indented from the
            // heading above.
            "-ml-1.5 grid grid-cols-1 gap-x-8 gap-y-5",
            // `md` on purpose: the same breakpoint at which the resource header
            // stops being a row and stacks its actions underneath. One column
            // and a stacked header are the same narrow layout. Fields never go
            // past two: a third column leaves a label too narrow to read.
            columns > 1 && "md:grid-cols-2"
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}
