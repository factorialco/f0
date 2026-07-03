import { useEffect, useId, useMemo, useRef, useState } from "react"

import { F0Alert } from "@/components/F0Alert"
import { F0InputField } from "@/components/F0InputField"
import { type RecordType } from "@/hooks/datasource"
import { Search } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverAnchor } from "@/ui/popover"

import { AudienceDropdown } from "./components/AudienceDropdown"
import { AudienceField } from "./components/AudienceField"
import { useAudienceSearch } from "./hooks/useAudienceSearch"
import type { AudienceOptionItem } from "./internal-types"
import {
  audienceEntityKey,
  type F0AudienceEntity,
  type F0AudienceSelectorProps,
} from "./types"

export const F0AudienceSelector = <R extends RecordType = RecordType>({
  source,
  mapEntity,
  value,
  onChange,
  suggestions,
  trailing,
  warning,
  onOpenChange,
  searchEmptyMessage,
  label,
  hideLabel,
  placeholder,
  disabled,
  loading,
  error,
  dataTestId,
}: F0AudienceSelectorProps<R>) => {
  const i18n = useI18n()
  const reactId = useId()
  const listboxId = `audience-listbox-${reactId}`

  const anchorRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selectedKeys = useMemo(
    () => new Set(value.map(audienceEntityKey)),
    [value]
  )

  const {
    query,
    setQuery,
    isSearching,
    options,
    isLoading,
    isLoadingMore,
    loadMore,
    hasMore,
  } = useAudienceSearch({ source, mapEntity, listboxId, selectedKeys })

  const suggestionItems = useMemo<AudienceOptionItem[]>(
    () =>
      (suggestions ?? []).map((option, index) => {
        const key = audienceEntityKey(option.entity)
        return {
          option,
          key,
          domId: `${listboxId}-suggestion-${index}`,
          selected: selectedKeys.has(key),
          disabled: !!option.disabledReason,
        }
      }),
    [suggestions, selectedKeys, listboxId]
  )

  const items = isSearching ? options : suggestionItems

  const [open, setOpen] = useState(false)
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const changeOpen = (next: boolean) => {
    if (next === open) {
      return
    }
    setOpen(next)
    onOpenChange?.(next)
  }

  // Keep the active option valid as results change: fall back to the first
  // enabled option whenever the previous one is gone or disabled.
  useEffect(() => {
    if (!open) {
      return
    }
    setActiveKey((previous) => {
      if (items.some((item) => item.key === previous && !item.disabled)) {
        return previous
      }
      return items.find((item) => !item.disabled)?.key ?? null
    })
  }, [items, open])

  const activeItem = items.find((item) => item.key === activeKey)

  const toggleItem = (item: AudienceOptionItem) => {
    if (item.disabled) {
      return
    }
    onChange(
      selectedKeys.has(item.key)
        ? value.filter((entity) => audienceEntityKey(entity) !== item.key)
        : [...value, item.option.entity]
    )
    // The dropdown stays open for further picks; the query resets
    setQuery("")
    inputRef.current?.focus()
  }

  const removeEntity = (entity: F0AudienceEntity) => {
    const key = audienceEntityKey(entity)
    onChange(value.filter((candidate) => audienceEntityKey(candidate) !== key))
  }

  const moveActive = (direction: 1 | -1) => {
    const enabled = items.filter((item) => !item.disabled)
    if (enabled.length === 0) {
      return
    }
    const currentIndex = enabled.findIndex((item) => item.key === activeKey)
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : enabled.length - 1
        : (currentIndex + direction + enabled.length) % enabled.length
    setActiveKey(enabled[nextIndex].key)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Backspace":
        if (query === "" && value.length > 0) {
          onChange(value.slice(0, -1))
        }
        break
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault()
        if (!open) {
          changeOpen(true)
          return
        }
        moveActive(event.key === "ArrowDown" ? 1 : -1)
        break
      case "Enter":
        if (open && activeItem) {
          event.preventDefault()
          toggleItem(activeItem)
        }
        break
      case "Escape":
        // Close only the dropdown — never an enclosing dialog
        if (open) {
          event.preventDefault()
          event.stopPropagation()
          changeOpen(false)
        }
        break
    }
  }

  const emptyMessage = isSearching
    ? (searchEmptyMessage ?? i18n.audience.selector.noResults)
    : i18n.audience.selector.typeToSearch

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <div className="flex w-full flex-col gap-2">
        <Popover open={open} onOpenChange={changeOpen}>
          <PopoverAnchor asChild>
            <div ref={anchorRef} className="w-full">
              <F0InputField
                label={label}
                hideLabel={hideLabel}
                placeholder={placeholder}
                disabled={disabled}
                error={error}
                loading={loading || (open && isLoading)}
                loadingIndicator={{ asOverlay: true }}
                size="md"
                canGrow
                icon={Search}
                role="combobox"
                aria-controls={listboxId}
                aria-expanded={open}
                inputRef={inputRef}
                value={query}
                isEmpty={(current) => value.length === 0 && !current}
                onChange={(next) => {
                  setQuery(next)
                  changeOpen(true)
                }}
                onFocus={() => changeOpen(true)}
                append={value.length > 0 ? trailing : undefined}
              >
                <AudienceField
                  entities={value}
                  onRemoveEntity={removeEntity}
                  onKeyDown={handleInputKeyDown}
                  aria-activedescendant={
                    open && activeItem ? activeItem.domId : undefined
                  }
                  aria-autocomplete="list"
                />
              </F0InputField>
            </div>
          </PopoverAnchor>
          <AudienceDropdown
            listboxId={listboxId}
            label={label}
            items={items}
            activeKey={activeKey}
            isLoading={isLoading}
            isLoadingMore={isLoadingMore}
            hasMore={hasMore}
            loadMore={loadMore}
            emptyMessage={emptyMessage}
            onToggle={toggleItem}
            onActivate={(item) => setActiveKey(item.key)}
            onInteractOutside={(event) => {
              // Clicking the field itself must not dismiss the dropdown
              if (anchorRef.current?.contains(event.target as Node)) {
                event.preventDefault()
              }
            }}
          />
        </Popover>
        {warning && !open && (
          <F0Alert
            variant="warning"
            title={warning.title}
            description={warning.description}
          />
        )}
      </div>
    </DataTestIdWrapper>
  )
}
