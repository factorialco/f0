import { useCallback, useMemo, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog/dialog"

import { CommandHelpBar } from "./components/CommandHelpBar"
import { CommandResults } from "./components/CommandResults"
import { CommandSearchField } from "./components/CommandSearchField"
import { useCommandKeyboardNav } from "./hooks/useCommandKeyboardNav"
import { CommandGroup, CommandItem, F0CommandBarProps } from "./types"

function filterGroups(groups: CommandGroup[], search: string): CommandGroup[] {
  if (!search.trim()) return groups
  const lower = search.toLowerCase()
  return groups.map((g) => ({
    ...g,
    items: g.items.filter(
      (item) =>
        item.label.toLowerCase().includes(lower) ||
        item.keywords?.some((k) => k.toLowerCase().includes(lower))
    ),
  }))
}

export function F0CommandBar({
  open,
  onOpenChange,
  groups,
  placeholder,
  searchValue: controlledSearch,
  onSearchChange,
  filter = true,
  loading = false,
  emptyState,
}: F0CommandBarProps) {
  const translations = useI18n()
  const [internalSearch, setInternalSearch] = useState("")

  const isControlled = controlledSearch !== undefined
  const search = isControlled ? controlledSearch : internalSearch

  const handleSearchChange = useCallback(
    (value: string) => {
      if (!isControlled) setInternalSearch(value)
      onSearchChange?.(value)
    },
    [isControlled, onSearchChange]
  )

  const handleClose = useCallback(() => {
    onOpenChange(false)
    setInternalSearch("")
  }, [onOpenChange])

  const filteredGroups = useMemo(
    () => (filter ? filterGroups(groups, search) : groups),
    [filter, groups, search]
  )

  const handleSelect = useCallback(
    (item: CommandItem) => {
      if (item.onSelect) item.onSelect()
      handleClose()
    },
    [handleClose]
  )

  const { selectedId, setSelectedId, handleKeyDown } = useCommandKeyboardNav({
    groups: filteredGroups,
    open,
    onSelect: handleSelect,
    onClose: handleClose,
  })

  const defaultEmptyState = <span>{translations.commandBar.empty}</span>

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) handleClose()
      }}
    >
      <DialogContent
        className="p-0 overflow-hidden"
        wrapperClassName="items-start pt-[15vh]"
        withTranslateAnimation={false}
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">
          {translations.commandBar.searchPlaceholder}
        </DialogTitle>
        <CommandSearchField
          value={search}
          onChange={handleSearchChange}
          placeholder={placeholder ?? translations.commandBar.searchPlaceholder}
          open={open}
          onKeyDown={handleKeyDown}
        />
        <CommandResults
          groups={filteredGroups}
          selectedId={selectedId}
          onSelect={handleSelect}
          onHover={setSelectedId}
          emptyState={emptyState ?? defaultEmptyState}
          loading={loading}
        />
        <CommandHelpBar
          navigate={translations.commandBar.navigate}
          select={translations.commandBar.select}
          cancel={translations.commandBar.cancel}
        />
      </DialogContent>
    </Dialog>
  )
}
