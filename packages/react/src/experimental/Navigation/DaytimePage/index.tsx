import { F0Button } from "@/components/F0Button"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0AvatarPulse } from "@/components/avatars/F0AvatarPulse"
import { OneSwitch } from "@/experimental/AiChat/OneSwitch"
import { useSidebar } from "@/experimental/Navigation/ApplicationFrame/FrameProvider"
import Menu from "@/icons/app/Menu"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import { ComponentProps } from "react"

const daytimePageVariants = cva({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning:
        "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon:
        "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening:
        "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%",
    },
  },
  defaultVariants: {
    period: "morning",
  },
})

export interface DaytimePageProps
  extends VariantProps<typeof daytimePageVariants> {
  children?: React.ReactNode
  header?: {
    title: string
    description?: string
    employeeFirstName: string
    employeeLastName: string
    employeeAvatar?: string
    pulse?: ComponentProps<typeof F0AvatarPulse>["pulse"]
    onPulseClick?: ComponentProps<typeof F0AvatarPulse>["onPulseClick"]
  }
  embedded?: boolean
}

export function DaytimePage({
  children,
  header,
  period,
  embedded = false,
}: DaytimePageProps) {
  const { sidebarState, toggleSidebar, isSmallScreen } = useSidebar()

  return (
    <div
      className={`relative flex w-full flex-col overflow-hidden ${
        embedded ? "" : "xs:rounded-xl"
      } bg-f1-special-page shadow`}
    >
      <div className={daytimePageVariants({ period })} />
      {header && (
        <div className="flex flex-row items-center justify-between pr-6 @container">
          <div className="flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6">
            {(isSmallScreen || sidebarState === "hidden") && (
              <F0Button
                variant="ghost"
                onClick={toggleSidebar}
                label="Open main menu"
                icon={Menu}
                hideLabel
              />
            )}
            <div
              className={cn(
                "flex flex-row items-center",
                isSmallScreen ? "gap-1.5" : "gap-3"
              )}
            >
              {header?.onPulseClick ? (
                <F0AvatarPulse
                  src={header.employeeAvatar}
                  firstName={header.employeeFirstName}
                  lastName={header.employeeLastName}
                  pulse={header.pulse}
                  onPulseClick={header.onPulseClick}
                />
              ) : (
                <F0AvatarPerson
                  src={header.employeeAvatar}
                  firstName={header.employeeFirstName}
                  lastName={header.employeeLastName}
                  size={
                    isSmallScreen
                      ? "small"
                      : header.description
                        ? "large"
                        : "medium"
                  }
                />
              )}
              <div className="flex flex-col">
                <p
                  className={cn(
                    isSmallScreen ? "text-lg" : "text-2xl",
                    "font-semibold text-f1-foreground"
                  )}
                >
                  {header.title}
                </p>

                {header.description && (
                  <p
                    className={cn(
                      isSmallScreen ? "text-md" : "text-lg",
                      "text-f1-foreground-secondary"
                    )}
                  >
                    {header.description}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <OneSwitch />
          </div>
        </div>
      )}
      <div
        className={cn(
          "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
          isSmallScreen && "-mt-3"
        )}
      >
        {children}
      </div>
    </div>
  )
}

DaytimePage.displayName = "DaytimePage"
