import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Ai, ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Input } from "@/ui/input"

import { EnhancementOption } from "../../utils/types"

interface OptionProps {
  option: EnhancementOption
  onClick: (option: EnhancementOption) => void
  selectedOption?: EnhancementOption | null
}

const Option = ({ option, onClick, selectedOption = null }: OptionProps) => {
  return (
    <div
      onClick={() => onClick(option)}
      className={cn(
        "flex cursor-pointer flex-row items-center gap-2 rounded-md bg-f1-background p-2 hover:bg-f1-background-secondary",
        selectedOption?.id === option.id && "bg-f1-background-secondary"
      )}
    >
      <p className="text-neutral-40 text-md grow text-ellipsis font-normal">
        {option.label}
      </p>
      {option.subOptions && option.subOptions.length > 0 && (
        <F0Icon icon={ChevronRight} size="md" className="text-f1-icon" />
      )}
    </div>
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
  const [selectedOption, setSelectedOption] =
    useState<EnhancementOption | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const customInputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const subMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (customInputRef.current) {
      customInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectedOption) return
      if (!(event.target instanceof Element)) return

      const clickedOnMainMenu = menuRef.current?.contains(event.target)
      const clickedOnSubMenu = subMenuRef.current?.contains(event.target)
      const optionItem = event.target.closest(".option-item")

      if (
        !clickedOnSubMenu &&
        (!clickedOnMainMenu ||
          (clickedOnMainMenu && optionItem?.id !== selectedOption.id))
      ) {
        setSelectedOption(null)
      }
    }

    if (selectedOption) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedOption])

  const handleOptionSelect = (option: EnhancementOption) => {
    if (option.subOptions && option.subOptions.length > 0) {
      setSelectedOption((prevSelected) =>
        prevSelected?.id === option.id ? null : option
      )
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
    <div className="relative">
      <div
        ref={menuRef}
        className="flex max-h-60 w-80 flex-col overflow-hidden rounded-lg border border-solid border-f1-border bg-f1-background drop-shadow-sm"
      >
        <div className="flex w-full flex-row items-center p-2">
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
            {filteredOptions.map((option) => (
              <div id={option.id} className="option-item" key={option.id}>
                <Option
                  onClick={handleOptionSelect}
                  option={option}
                  selectedOption={selectedOption}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedOption &&
          selectedOption.subOptions &&
          selectedOption.subOptions.length > 0 && (
            <motion.div
              ref={subMenuRef}
              className="absolute bottom-0 left-full z-50 max-h-60 w-60 overflow-y-auto rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm"
              style={{ marginLeft: "8px" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="scrollbar-macos flex flex-col overflow-y-auto">
                {selectedOption.subOptions.map((subOption) => (
                  <Option
                    key={subOption.id}
                    onClick={handleSubOptionSelect}
                    option={subOption}
                  />
                ))}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}

export { AIEnhanceMenu }
