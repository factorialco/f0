import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/ui/Card"

import { F0DemoCardProps } from "./types"

export const F0DemoCard = ({
  preview,
  moduleName,
  description,
  onAction,
  actionHref,
}: F0DemoCardProps) => {
  const translations = useI18n()
  const titleTemplate =
    translations?.ai?.growth?.demoCard?.title ?? "Show {{moduleName}} in action"
  const actionLabel =
    translations?.ai?.growth?.demoCard?.actionLabel ?? "Start demo"
  const title = titleTemplate.replace("{{moduleName}}", moduleName)

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent className="flex flex-col gap-4 p-0">
        <div
          className={cn(
            "overflow-hidden rounded-lg border border-f1-border",
            "ring-1 ring-f1-border/50 bg-f1-background-inverse-secondary"
          )}
        >
          {preview}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-f1-foreground">{title}</h3>
          <p className="text-base text-f1-foreground-secondary">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3">
        {actionHref ? (
          <F0Button
            variant="default"
            size="md"
            label={actionLabel}
            href={actionHref}
            target="_blank"
          />
        ) : (
          <F0Button
            type="button"
            variant="default"
            size="md"
            label={actionLabel}
            onClick={onAction}
          />
        )}
      </CardFooter>
    </Card>
  )
}
