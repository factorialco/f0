import { FC, ReactNode } from "react"

import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { cn } from "@/lib/utils"

interface DoDontsProps {
  do: {
    description: string
    guidelines?: Array<string>
    children?: ReactNode
  }
  dont: {
    description: string
    guidelines?: Array<string>
    children?: ReactNode
  }
  /**
   * Stack the Do and Don't blocks vertically instead of side by side. Use it when
   * each block holds wide content (e.g. a full-width card example) that would
   * overflow a half-width column. Defaults to the side-by-side layout.
   */
  stacked?: boolean
}

export const DoDonts: FC<DoDontsProps> = ({
  do: doExample,
  dont: dontExample,
  stacked = false,
}) => (
  <div
    className={cn(
      "grid gap-4 [&:not(:first-child)]:mt-4",
      !stacked && "md:grid-cols-2"
    )}
  >
    <div className="flex flex-col gap-4 rounded-lg bg-f1-background-tertiary p-5">
      <div className="w-fit">
        <F0TagStatus text="Do" variant="positive" />
      </div>
      {doExample.children && (
        <div className="[&>div]:m-0 [&_.docs-story]:rounded-none [&_.docs-story]:border-0 [&_.docs-story]:bg-transparent [&_.docs-story]:p-0 [&_.docs-story]:shadow-none">
          {doExample.children}
        </div>
      )}
      <p className="!m-0 text-f1-foreground-secondary">
        {doExample.description}
      </p>
      {doExample.guidelines && (
        <ul className="!my-0 !list-inside !list-disc !pl-2">
          {doExample.guidelines.map((guideline) => (
            <li key={guideline} className="!leading-snug">
              {guideline}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="flex flex-col gap-4 rounded-lg bg-f1-background-tertiary p-5">
      <div className="w-fit">
        <F0TagStatus text="Don't" variant="critical" />
      </div>
      {dontExample.children && (
        <div className="[&>div]:m-0 [&_.docs-story]:rounded-none [&_.docs-story]:border-0 [&_.docs-story]:bg-transparent [&_.docs-story]:p-0 [&_.docs-story]:shadow-none">
          {dontExample.children}
        </div>
      )}
      <p className="!m-0 text-f1-foreground-secondary">
        {dontExample.description}
      </p>
      {dontExample.guidelines && (
        <ul className="!my-0 !list-inside !list-disc !pl-2">
          {dontExample.guidelines.map((guideline) => (
            <li key={guideline} className="!leading-snug">
              {guideline}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)
