import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { CopyIcon } from "lucide-react"
type Props = {
  name: string
  description?: string
  cssColor?: string
}

export function ColorToken({ name, description }: Props) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="flex max-w-[600px] flex-row items-center space-x-3 rounded-sm border border-solid border-f1-border bg-f1-background-secondary px-2 py-1.5 dark:border-f1-border-secondary dark:bg-f1-background">
      <div className={cn("h-8 w-12 rounded-sm", `bg-${name}`)} />
      <div className="flex flex-1 flex-col space-y-0">
        <span className="font-mono flex-grow font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
          {name}
        </span>
        <p className="text-sm text-f1-foreground-secondary">{description}</p>
      </div>
      <div className="invert-0 filter dark:invert">
        <F0Button
          onClick={copyToClipboard}
          variant="ghost"
          disabled={copied}
          label={copied ? "Copied!" : "Copy"}
          icon={copied ? undefined : CopyIcon}
        />
      </div>
    </div>
  )
}
