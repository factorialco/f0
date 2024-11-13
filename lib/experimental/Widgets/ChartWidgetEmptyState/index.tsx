import { Button, ButtonProps } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { forwardRef } from "react"
import EmptyBarChart from "./Backgrounds/EmptyBarChart"
import EmptyLineChart from "./Backgrounds/EmptyLineChart"

type Type = "bar-chart" | "line-chart"

interface Props {
  title: string
  content: string
  buttonLabel?: string
  buttonIcon?: IconType
  buttonAction?: () => void
  type: Type
}

export type ChatWidgetEmptyStateProps = Props

const ROOT_CLASSNAMES: Record<Type, string> = {
  "line-chart": "border-f1-border-accent-alpha20",
  "bar-chart": "border-f1-border-promote-alpha30",
}

const CONTENT_CLASSNAMES: Record<Type, string> = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64",
}

const BG_CLASSNAMES: Record<Type, string> = {
  "line-chart": "from-f1-background-accent-alpha5",
  "bar-chart": "from-f1-background-promote-alpha5",
}

const BUTTON_VARIANT: Record<Type, ButtonProps["variant"]> = {
  "line-chart": "default",
  "bar-chart": "promote",
}

export const ChartWidgetEmptyState = forwardRef<HTMLDivElement, Props>(
  function WidgetEmptyState(
    { title, content, buttonLabel, buttonIcon, buttonAction, type },
    ref
  ) {
    const rootClassName = ROOT_CLASSNAMES[type]
    const contentClassName = CONTENT_CLASSNAMES[type]
    const bgClassName = BG_CLASSNAMES[type]
    const buttonVariant = BUTTON_VARIANT[type]

    return (
      <Card
        className={cn(
          "relative flex gap-4 overflow-hidden border-dashed",
          rootClassName
        )}
        ref={ref}
      >
        <CardHeader className="-mt-0.5">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className={cn("flex flex-col gap-4", contentClassName)}>
          <div
            className={cn(
              "absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent",
              bgClassName
            )}
          >
            {type === "bar-chart" && (
              <div className="absolute bottom-1 left-4 right-4">
                <EmptyBarChart className="w-full" />
              </div>
            )}
            {type === "line-chart" && <EmptyLineChart className="w-full" />}
          </div>
          <div className="relative flex min-h-28 flex-1 flex-col items-start gap-5">
            <p className="flex w-3/4 text-xl font-semibold">{content}</p>
            {buttonLabel && (
              <Button
                label={buttonLabel}
                icon={buttonIcon}
                variant={buttonVariant}
                onClick={buttonAction}
              />
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)
