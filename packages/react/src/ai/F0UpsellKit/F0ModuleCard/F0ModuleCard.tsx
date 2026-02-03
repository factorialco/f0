import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { ModuleId } from "@/components/avatars/F0AvatarModule/modules"
import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { Card, CardContent, CardFooter } from "@/ui/Card"

import { F0ModuleCardProps } from "./types"

export const F0ModuleCard = ({
  module,
  moduleName,
  description,
  onAction,
  actionHref,
}: F0ModuleCardProps) => {
  const translations = useI18n()
  const actionLabel = translations?.ai?.growth?.moduleCard?.actionLabel ?? ""

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent className="flex flex-col gap-3 p-0">
        <div className="flex items-start gap-3">
          <F0AvatarModule module={module as ModuleId} size="lg" />
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="text-lg font-semibold text-f1-foreground">
              {moduleName}
            </h3>
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3">
        {actionHref ? (
          <F0Button
            variant="outline"
            size="md"
            label={actionLabel}
            href={actionHref}
          />
        ) : (
          <F0Button
            type="button"
            variant="outline"
            size="md"
            label={actionLabel}
            onClick={onAction}
          />
        )}
      </CardFooter>
    </Card>
  )
}
