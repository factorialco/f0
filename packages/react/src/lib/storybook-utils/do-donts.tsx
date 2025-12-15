import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { FC, ReactNode } from "react"

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
}

export const DoDonts: FC<DoDontsProps> = ({ do: doExample, dont: dontExample }) => (
  <div className="grid gap-4 md:grid-cols-2">
    <div className="flex flex-col gap-4 rounded-lg bg-f1-background-tertiary p-5">
      <div className="w-fit">
        <F0TagStatus text="Do" variant="positive" />
      </div>
      {doExample.children && <div className="[&>div]:m-0">{doExample.children}</div>}
      <p className="!m-0 text-f1-foreground-secondary">{doExample.description}</p>
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
      {dontExample.children && <div className="[&>div]:m-0">{dontExample.children}</div>}
      <p className="!m-0 text-f1-foreground-secondary">{dontExample.description}</p>
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
