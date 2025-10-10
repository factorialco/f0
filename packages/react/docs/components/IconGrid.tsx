import { AnimatePresence, motion } from "motion/react"
import { useMemo, useState } from "react"
import { F0Icon as IconComponent, IconType } from "../../src/components/F0Icon"
import { OneEllipsis } from "../../src/components/OneEllipsis"
import * as Icons from "../../src/icons/app"
import { cn, focusRing } from "../../src/lib/utils.ts"

type IconEntry = {
  name: string
  icon: IconType
}

const iconList: IconEntry[] = Object.entries(Icons).map(([name, icon]) => ({
  name,
  icon,
}))

function IconCard({ name, icon: Icon }: IconEntry) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 500)
  }

  return (
    <motion.div
      key={name}
      className="group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-lg border border-solid border-f1-border-secondary p-4 transition-all hover:border-f1-border hover:shadow"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      <IconComponent icon={Icon} size="lg" color="bold" />
      <div className="w-full text-center text-f1-foreground-secondary">
        <OneEllipsis tag="span" className="!text-sm">
          {name}
        </OneEllipsis>
      </div>
      <motion.button
        onClick={copyToClipboard}
        className={cn(
          "absolute right-2 top-2 h-7 w-7 rounded bg-f1-background p-1 text-f1-foreground-secondary opacity-0 transition-all hover:bg-f1-background-secondary group-hover:opacity-100",
          isCopied &&
            "bg-f1-background-positive hover:bg-f1-background-positive"
        )}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {isCopied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.1 }}
              className="text-f1-icon-positive"
            >
              <IconComponent icon={Icons.Check} />
            </motion.div>
          ) : (
            <motion.div
              key="layers"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.1 }}
            >
              <IconComponent icon={Icons.LayersFront} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export function IconGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIcons = useMemo(() => {
    return iconList.filter((icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="flex flex-col gap-4">
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
      <AnimatePresence>
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredIcons.map((iconEntry) => (
              <IconCard key={iconEntry.name} {...iconEntry} />
            ))}
          </div>
        ) : (
          <p className="text-center text-f1-foreground-secondary">
            No icons found matching your search.
          </p>
        )}
      </AnimatePresence>
    </div>
  )
}
