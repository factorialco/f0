import type { IconType } from "@/components/F0Icon"

import { F0Button, type F0ButtonProps } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { useLayout } from "@/layouts/LayoutProvider"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"

type Props = {
  /** Main heading text */
  title: string

  /** Description text below the title */
  description: string

  /**  Complementary action specific to the section */
  action?: Pick<F0ButtonProps, "label" | "onClick"> & {
    icon?: IconType
    variant?: "default" | "outline"
  }

  /** Optional link to related documentation (Help center or other link) */
  link?: {
    label: string
    href: string
  }

  /** If specified, a separator will be displayed above or below the content */
  separator?: "top" | "bottom"
}

/**
 * `border-style: dashed` leaves the dash length to the browser, which draws a
 * 1px-on, 1px-off hairline. The rule is painted as a repeating gradient
 * instead, so the dash is 3px on / 4px off, the same rhythm `Separator` uses.
 *
 * `bg-origin-border` puts the gradient's box at the border edge, so the rule
 * lands exactly where the colored border used to, and the transparent 1px
 * border stays on to reserve that space: a section with a separator and one
 * without still line up.
 */
const dashedRule =
  "bg-repeat-x bg-origin-border [background-image:repeating-linear-gradient(to_right,theme(colors.f1.border.DEFAULT)_0,theme(colors.f1.border.DEFAULT)_3px,transparent_3px,transparent_7px)] [background-size:7px_1px]"

const _SectionHeader = ({
  title,
  description,
  action,
  link,
  separator,
}: Props) => {
  const layout = useLayout()
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-4 border border-transparent px-6 pb-5 pt-5 first:pb-0 first:pt-0 md:flex-row md:gap-2",
        layout === "standard" && "-mx-[23px]",
        separator === "top" && cn(dashedRule, "bg-left-top first:pt-5"),
        separator === "bottom" && cn(dashedRule, "bg-left-bottom first:pb-5")
      )}
    >
      <div className="flex grow flex-col gap-3">
        <div className="flex max-w-[640px] flex-col gap-1">
          <h2 className="text-lg font-semibold text-f1-foreground">{title}</h2>
          <p className="text-f1-foreground-secondary">{description}</p>
        </div>
        {link && (
          <div className="w-fit">
            <F0Link href={link.href} target="_blank">
              {link.label}
            </F0Link>
          </div>
        )}
      </div>
      {action && (
        <>
          <div className="hidden md:block">
            <F0Button
              label={action.label}
              variant={action.variant ?? "outline"}
              icon={action.icon}
              size="md"
              onClick={action.onClick}
            />
          </div>
          <div className="w-full md:hidden [&>button]:w-full">
            <F0Button
              label={action.label}
              variant={action.variant ?? "outline"}
              icon={action.icon}
              size="lg"
              onClick={action.onClick}
            />
          </div>
        </>
      )}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const SectionHeader = experimentalComponent(
  "SectionHeader",
  _SectionHeader
)
