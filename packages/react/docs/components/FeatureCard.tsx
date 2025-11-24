import { useState } from "react"
import { F0Icon, IconType } from "../../src/components/F0Icon"

export interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
  href: string
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="rounded-lg border border-solid border-f1-border bg-f1-background transition-all hover:shadow dark:border-f1-border-secondary dark:hover:border-f1-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} className="block h-full p-6 no-underline">
        <div className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-f1-background-secondary dark:bg-f1-background-secondary">
            <F0Icon
              icon={icon}
              state={isHovered ? "animate" : "normal"}
              className="h-6 w-6 text-f1-icon dark:text-f1-foreground-inverse"
            />
          </div>
        </div>
        <h4 className="mb-2 text-xl font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
          {title}
        </h4>
        <p className="text-f1-foreground-secondary">{description}</p>
      </a>
    </div>
  )
}
