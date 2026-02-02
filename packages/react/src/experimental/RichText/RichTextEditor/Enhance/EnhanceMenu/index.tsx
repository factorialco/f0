import * as Popover from "@radix-ui/react-popover"
import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Ai, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"

import { EnhancementOption } from "../../utils/types"

interface OptionProps {
  option: EnhancementOption
  onClick: (option: EnhancementOption) => void
  isSelected?: boolean
}

const Option = ({ option, onClick, isSelected = false }: OptionProps) => {
  return (
    <ButtonInternal
      variant="ghost"
      pressed={isSelected}
      label={option.label}
      icon={
        option.subOptions && option.subOptions.length > 0
          ? ChevronRight
          : undefined
      }
      onClick={() => onClick(option)}
      className="w-full [&>div>span>div]:justify-start"
    />
  )
}

interface OptionWithSubMenuProps {
  option: EnhancementOption
  onSelect: (option: EnhancementOption) => void
  onSubSelect: (option: EnhancementOption) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const OptionWithSubMenu = ({
  option,
  onSelect,
  onSubSelect,
  isOpen,
  onOpenChange,
}: OptionWithSubMenuProps) => {
  return (
    <Popover.Root open={isOpen} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>
        <div>
          <Option
            option={option}
            onClick={() => onSelect(option)}
            isSelected={isOpen}
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="right"
          sideOffset={8}
          align="start"
          alignOffset={-4}
          collisionPadding={10}
          avoidCollisions
          style={{ zIndex: 10000 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="scrollbar-macos max-h-60 max-w-60 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex flex-col">
                  {option.subOptions?.map((subOption) => (
                    <Option
                      key={subOption.id}
                      onClick={onSubSelect}
                      option={subOption}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

interface AIEnhanceMenuProps {
  onSelect: ({
    selectedIntent,
    customIntent,
  }: {
    selectedIntent?: string
    customIntent?: string
  }) => void
  onClose: () => void
  enhancementOptions: EnhancementOption[]
  inputPlaceholder: string
}

const AIEnhanceMenu = ({
  onSelect,
  onClose,
  enhancementOptions,
  inputPlaceholder,
}: AIEnhanceMenuProps) => {
  const [openSubMenuId, setOpenSubMenuId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const customInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (customInputRef.current) {
      customInputRef.current.focus()
    }
  }, [])

  const handleOptionSelect = (option: EnhancementOption) => {
    if (option.subOptions && option.subOptions.length > 0) {
      setOpenSubMenuId((prev) => (prev === option.id ? null : option.id))
    } else {
      onSelect({ selectedIntent: option.id, customIntent: undefined })
      onClose()
    }
  }

  const handleSubOptionSelect = (option: EnhancementOption) => {
    onSelect({ selectedIntent: option.id, customIntent: undefined })
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim()) {
        onSelect({
          selectedIntent: undefined,
          customIntent: searchQuery.trim(),
        })
        setSearchQuery("")
        onClose()
      }
    }
  }

  const filteredOptions = enhancementOptions.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex max-w-80 flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-sm">
      <div className="flex w-full flex-row items-center p-2 [&>div]:w-full">
        <Input
          icon={Ai}
          label={inputPlaceholder}
          hideLabel
          type="text"
          placeholder={inputPlaceholder}
          autoFocus
          value={searchQuery}
          onChange={setSearchQuery}
          onKeyDown={handleKeyDown}
          ref={customInputRef}
        />
      </div>
      {enhancementOptions.length > 0 && (
        <div className="scrollbar-macos flex flex-col overflow-y-auto px-1 pb-1">
          {filteredOptions.map((option) => {
            const hasSubOptions =
              option.subOptions && option.subOptions.length > 0

            if (hasSubOptions) {
              return (
                <OptionWithSubMenu
                  key={option.id}
                  option={option}
                  onSelect={handleOptionSelect}
                  onSubSelect={handleSubOptionSelect}
                  isOpen={openSubMenuId === option.id}
                  onOpenChange={(open) =>
                    setOpenSubMenuId(open ? option.id : null)
                  }
                />
              )
            }

            return (
              <Option
                key={option.id}
                onClick={handleOptionSelect}
                option={option}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export { AIEnhanceMenu }
