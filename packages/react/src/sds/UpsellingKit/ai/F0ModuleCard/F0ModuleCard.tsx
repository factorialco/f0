import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { ModuleId } from "@/components/avatars/F0AvatarModule/modules"
import { F0Button } from "@/components/F0Button"
import { ExternalLink } from "@/icons/app"
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
  const actionLabel =
    translations?.ai?.growth?.moduleCard?.actionLabel ?? "Learn more"

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent className="flex flex-col gap-2 p-0">
        <F0AvatarModule module={module as ModuleId} size="lg" />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-f1-foreground">
            {moduleName}
          </h3>
          <p className="text-base text-f1-foreground-secondary">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="relative -mx-4 mt-4 flex justify-end border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4">
        {actionHref ? (
          <F0Button
            variant="default"
            size="md"
            label={actionLabel}
            icon={ExternalLink}
            href={actionHref}
            target="_blank"
          />
        ) : (
          <F0Button
            type="button"
            variant="default"
            size="md"
            label={actionLabel}
            icon={ExternalLink}
            onClick={onAction}
          />
        )}
      </CardFooter>
    </Card>
  )
}
