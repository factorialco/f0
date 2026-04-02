import { useMemo, useState } from "react"

import { F0AvatarIcon } from "../../src/components/avatars/F0AvatarIcon"
import { F0AvatarModule } from "../../src/components/avatars/F0AvatarModule"
import {
  ModuleId,
  modules,
} from "../../src/components/avatars/F0AvatarModule/modules"
import { F0Icon as IconComponent, IconType } from "../../src/components/F0Icon"
import * as AnimatedIcons from "../../src/icons/animated"
import * as Icons from "../../src/icons/app"
import * as ModuleIcons from "../../src/icons/modules"
import { cn, focusRing } from "../../src/lib/utils.ts"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../src/ui/tooltip"

type IconEntry = {
  name: string
  icon: IconType
}

const iconList: IconEntry[] = Object.entries(Icons).map(([name, icon]) => ({
  name,
  icon,
}))

const moduleIconList: IconEntry[] = Object.entries(ModuleIcons).map(
  ([name, icon]) => ({ name, icon })
)

const animatedIconList: IconEntry[] = Object.entries(AnimatedIcons).map(
  ([name, icon]) => ({ name, icon })
)

function IconCard({
  name,
  icon,
  animated = false,
}: IconEntry & { animated?: boolean }) {
  const [isCopied, setIsCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`<F0AvatarIcon icon={${name}} />`)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <TooltipProvider delayDuration={1500} disableHoverableContent>
      <Tooltip open={isHovered || isCopied ? true : undefined}>
        <TooltipTrigger asChild>
          <button
            onClick={copyToClipboard}
            className={cn("block rounded-sm", focusRing())}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <F0AvatarIcon
              icon={icon}
              size="lg"
              state={animated && isHovered ? "animate" : "normal"}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCopied ? "Copied!" : name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function IconSection({
  title,
  description,
  icons,
  searchTerm,
  animated = false,
}: {
  title: string
  description?: string
  icons: IconEntry[]
  searchTerm: string
  animated?: boolean
}) {
  const filtered = useMemo(
    () =>
      icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [icons, searchTerm]
  )

  if (filtered.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h3 className="text-base font-semibold text-f1-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-f1-foreground-secondary">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(44px,1fr))] gap-4">
        {filtered.map((iconEntry) => (
          <IconCard key={iconEntry.name} {...iconEntry} animated={animated} />
        ))}
      </div>
    </div>
  )
}

const moduleIdList: ModuleId[] = Object.keys(modules) as ModuleId[]

function ModuleAvatarCard({ moduleId }: { moduleId: ModuleId }) {
  const [isCopied, setIsCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`<F0AvatarModule module="${moduleId}" />`)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <TooltipProvider delayDuration={1500} disableHoverableContent>
      <Tooltip open={isHovered || isCopied ? true : undefined}>
        <TooltipTrigger asChild>
          <button
            onClick={copyToClipboard}
            className={cn("block rounded-sm", focusRing())}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <F0AvatarModule module={moduleId} size="lg" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCopied ? "Copied!" : moduleId}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function IconGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredModuleIds = useMemo(
    () =>
      moduleIdList.filter((id) =>
        id.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  )

  const hasResults =
    iconList.some((i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    moduleIconList.some((i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    animatedIconList.some((i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    filteredModuleIds.length > 0

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search icons..."
          className={cn(
            "active:border-f1-border-active w-full rounded-md border border-solid border-f1-border py-2.5 pl-9 pr-3 transition-all hover:border-f1-border-hover",
            focusRing("focus:border-f1-border-hover")
          )}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        <div className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 select-none">
          <IconComponent icon={Icons.Search} color="secondary" />
        </div>
      </div>

      {!hasResults ? (
        <p className="text-center text-f1-foreground-secondary">
          No icons found matching your search.
        </p>
      ) : (
        <>
          <IconSection
            title="App icons"
            icons={iconList}
            searchTerm={searchTerm}
          />
          <IconSection
            title="Module icons"
            description="Raw SVG icons for product modules. For UI usage, prefer F0AvatarModule below."
            icons={moduleIconList}
            searchTerm={searchTerm}
          />
          {filteredModuleIds.length > 0 && (
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-base font-semibold text-f1-foreground">
                  F0AvatarModule
                </h3>
                <p className="text-sm text-f1-foreground-secondary">
                  The intended way to render module icons in the UI. Click to
                  copy the component usage.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(44px,1fr))] gap-4">
                {filteredModuleIds.map((id) => (
                  <ModuleAvatarCard key={id} moduleId={id} />
                ))}
              </div>
            </div>
          )}
          <IconSection
            title="Animated icons"
            description="Hover over an icon to preview its animation."
            icons={animatedIconList}
            searchTerm={searchTerm}
            animated
          />
        </>
      )}
    </div>
  )
}
