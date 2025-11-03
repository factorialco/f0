import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

interface TableOfContentsItem {
  id: string
  textContent: string
  level: number
  originalLevel: number
  itemIndex: number
  isActive: boolean
  isScrolledOver: boolean
  pos: number
}

interface TableOfContentsPopoverProps {
  editor: Editor
  items: TableOfContentsItem[]
}

export const TableOfContentsPopover = ({
  editor,
  items,
}: TableOfContentsPopoverProps) => {
  const [open, setOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) {
      const timer = setTimeout(() => setOpen(true), 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setOpen(false), 200)
      return () => clearTimeout(timer)
    }
  }, [isHovering])

  const handleItemClick = (item: TableOfContentsItem) => {
    // Scroll to the heading
    const node = editor.view.domAtPos(item.pos)
    const element = node.node as HTMLElement

    if (element && element.scrollIntoView) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Focus the editor and set selection at the heading
    editor.chain().focus().setTextSelection(item.pos).run()

    setOpen(false)
    setIsHovering(false)
  }

  if (items.length === 0) {
    return null
  }

  return (
    <motion.div
      className="sticky top-8 z-40 ml-auto w-fit"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "max-h-96 overflow-y-auto rounded px-3 py-2 transition-colors",
              "hover:bg-f1-background-secondary",
              open && "bg-f1-background-secondary"
            )}
          >
            {items.map(({ id, level, isActive }) => (
              <div
                key={id}
                className={cn(
                  "mb-3 h-0.5 rounded transition-colors",
                  level === 1 ? "w-4" : level === 2 ? "w-3" : "w-2",
                  isActive
                    ? "bg-f1-foreground-selected"
                    : "bg-f1-foreground-tertiary"
                )}
              />
            ))}
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          side="left"
          className="max-h-96 w-80 overflow-hidden p-0"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          asChild
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="max-h-96 overflow-y-auto p-2">
              <AnimatePresence mode="popLayout">
                <div className="flex flex-col">
                  {items.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={cn(
                        "rounded-md px-3 py-2 text-left text-sm transition-colors",
                        "hover:bg-f1-background-secondary",
                        item.level === 1
                          ? "ml-0"
                          : item.level === 2
                            ? "ml-2"
                            : "ml-4",
                        item.isActive
                          ? "bg-f1-background-hover font-medium text-f1-foreground"
                          : "text-f1-foreground-secondary"
                      )}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, delay: index * 0.02 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="line-clamp-2 flex-1">
                          {item.textContent}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </motion.div>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}
