import { F0Button, type F0ButtonProps } from "@/components/F0Button"
import type { IconType } from "@/components/F0Icon"
import { F0Link } from "@/components/F0Link"
import { useLayout } from "@/layouts/LayoutProvider"
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

export const SectionHeader = ({ title, description, action, link, separator }: Props) => {
  const layout = useLayout()
  return (
    <div
      className={cn(
        "border-1 flex flex-col justify-between gap-4 border-dashed border-transparent px-6 pb-5 pt-5 first:pb-0 first:pt-0 md:flex-row md:gap-2",
        layout === "standard" && "-mx-6",
        separator === "top" && "border-t-f1-border first:pt-5",
        separator === "bottom" && "border-b-f1-border first:pb-5"
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
