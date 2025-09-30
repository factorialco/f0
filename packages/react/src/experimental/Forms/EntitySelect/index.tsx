import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { cn } from "../../../lib/utils"
import { Content } from "./Content"
import { Trigger } from "./Trigger"
import {
  EntityId,
  EntitySelectEntity,
  EntitySelectProps,
  EntitySelectSubEntity,
} from "./types"

export const EntitySelect = <T,>(
  props: EntitySelectProps<T> & { children?: React.ReactNode }
) => {
  const [open, setOpen] = useState(
    (props.alwaysOpen || props.defaultOpen) ?? false
  )

  const onOpenChange = (open: boolean) => {
    setOpen(open)
    props.onOpenChange?.(open)
  }

  useEffect(() => {
    // We want to run this when the component is rendered the first time or when the defaultOpen prop changes
    if (props.defaultOpen && open) {
      props.onOpenChange?.(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to run this when this prop changes
  }, [props.defaultOpen])

  const [filteredEntities, setFilteredEntities] = useState<
    EntitySelectEntity[]
  >(props.entities)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const groupView = useMemo(
    () =>
      props.entities.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [props.entities]
  )

  function onPrivateSelect(entity: EntitySelectEntity) {
    if (props.singleSelector) {
      props.onSelect(entity)

      setOpen(false)

      return
    }

    const prevSelected = props.selectedEntities ?? []

    const filteredEntity = filteredEntities.find((fe) => fe.id === entity.id)
    if (!filteredEntity) {
      return
    }

    const visibleSubIds = new Set(
      (filteredEntity.subItems ?? []).map((s) => s.subId)
    )

    const parentIdsToUpdate = new Set<EntityId>([filteredEntity.id])
    filteredEntities.forEach((possibleParent) => {
      if (possibleParent.id !== filteredEntity.id) {
        const hasIntersection = (possibleParent.subItems ?? []).some((sub) =>
          visibleSubIds.has(sub.subId)
        )
        if (hasIntersection) {
          parentIdsToUpdate.add(possibleParent.id)
        }
      }
    })

    const newSelectedEntities = [...prevSelected]

    function upsertSelectedEntity(updated: EntitySelectEntity) {
      const idx = newSelectedEntities.findIndex((x) => x.id === updated.id)
      if (idx >= 0) {
        newSelectedEntities[idx] = updated
      } else {
        newSelectedEntities.push(updated)
      }
    }

    parentIdsToUpdate.forEach((parentId) => {
      const filteredParent = filteredEntities.find((p) => p.id === parentId)
      if (!filteredParent) return

      const newVisibleSubItems =
        filteredParent.subItems?.filter((sub) =>
          visibleSubIds.has(sub.subId)
        ) ?? []

      const oldIndex = newSelectedEntities.findIndex((x) => x.id === parentId)
      if (oldIndex >= 0) {
        const oldSubItems = newSelectedEntities[oldIndex].subItems ?? []
        const setOldSubIds = new Set(oldSubItems.map((s) => s.subId))

        const mergedSubItems = [
          ...oldSubItems,
          ...newVisibleSubItems.filter((s) => !setOldSubIds.has(s.subId)),
        ]

        upsertSelectedEntity({
          ...filteredParent,
          subItems: mergedSubItems,
        })
      } else {
        upsertSelectedEntity({
          ...filteredParent,
          subItems: newVisibleSubItems,
        })
      }
    })

    props.onSelect(newSelectedEntities)
  }

  function onSubItemSelect(
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) {
    if (props.singleSelector) {
      props.onSelect({ ...parentEntity, subItems: [{ ...entity }] })

      setOpen(false)
    } else {
      const prevSelected = props.selectedEntities ?? []
      const selectedIds = new Set(prevSelected.map((sel) => sel.id))
      const selectedSubItemsMap = new Map<EntityId, EntitySelectSubEntity[]>(
        prevSelected.map((sel) => [sel.id, sel.subItems ?? []])
      )

      selectedIds.add(parentEntity.id)

      props.entities.forEach((possibleParent) => {
        const parentHasNewSubItem = possibleParent.subItems?.some(
          (sub) => sub.subId === entity.subId
        )
        if (parentHasNewSubItem) {
          selectedIds.add(possibleParent.id)
        }
      })

      const newSelectedEntities: EntitySelectEntity[] = []

      props.entities.forEach((parent) => {
        if (selectedIds.has(parent.id)) {
          const oldSubItems = selectedSubItemsMap.get(parent.id) ?? []

          let mergedSubItems = [...oldSubItems]
          const parentContainsNewSub = parent.subItems?.some(
            (p) => p.subId === entity.subId
          )
          if (parentContainsNewSub) {
            const alreadyHasIt = mergedSubItems.some(
              (x) => x.subId === entity.subId
            )
            if (!alreadyHasIt) {
              mergedSubItems.push(entity)
            }
          }

          const realSubIds = new Set(
            (parent.subItems ?? []).map((sub) => sub.subId)
          )
          mergedSubItems = mergedSubItems.filter((sub) =>
            realSubIds.has(sub.subId)
          )

          newSelectedEntities.push({
            ...parent,
            subItems: mergedSubItems,
          })
        }
      })

      props.onSelect(newSelectedEntities)
    }
  }

  function onRemove(entityToRemove: EntitySelectEntity) {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    let newSelectedEntities: EntitySelectEntity[] = []
    const prevSelected = props.selectedEntities ?? []

    if (groupView) {
      const parentElement = filteredEntities.find(
        (fe) => fe.id === entityToRemove.id
      )

      if (!parentElement) {
        // This should never happen as a element not visible cannot be selected
        return
      }

      const subIdsRemoved = new Set(
        (parentElement.subItems ?? []).map((sub) => sub.subId)
      )

      for (const selectedParent of prevSelected) {
        const selectedParentSubItems = (selectedParent.subItems ?? []).filter(
          (sub) => !subIdsRemoved.has(sub.subId)
        )

        if (selectedParentSubItems.length > 0) {
          newSelectedEntities.push({
            ...selectedParent,
            subItems: selectedParentSubItems,
          })
        }
      }
    } else {
      newSelectedEntities = (prevSelected ?? []).filter((selectedEntity) => {
        return selectedEntity.id !== entityToRemove.id
      })
    }

    props.onSelect(newSelectedEntities)
  }

  function onSubItemRemove(
    _parentEntity: EntitySelectEntity,
    subEntity: EntitySelectSubEntity
  ) {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    const prevSelected = props.selectedEntities ?? []
    const subIdToRemove = subEntity.subId

    const newSelectedEntities: EntitySelectEntity[] = []

    for (const parent of prevSelected) {
      const filteredSubItems =
        parent.subItems?.filter((s) => s.subId !== subIdToRemove) ?? []

      if (filteredSubItems.length > 0) {
        newSelectedEntities.push({
          ...parent,
          subItems: filteredSubItems,
        })
      }
    }

    props.onSelect(newSelectedEntities)
  }

  function onClear() {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    const prevSelected = props.selectedEntities ?? []

    let newSelected: EntitySelectEntity[] = []

    if (groupView) {
      const visibleSubIds = new Set<EntityId>(
        filteredEntities.flatMap((ent) =>
          (ent.subItems ?? []).map((sub) => sub.subId)
        )
      )

      for (const selectedEntity of prevSelected) {
        const filteredSubItems = (selectedEntity.subItems ?? []).filter(
          (sub) => !visibleSubIds.has(sub.subId)
        )

        if (filteredSubItems.length > 0) {
          newSelected.push({
            ...selectedEntity,
            subItems: filteredSubItems,
          })
        }
      }
    } else {
      const visibleIds = new Set<EntityId>(
        filteredEntities.map((ent) => ent.id)
      )
      newSelected = (prevSelected ?? []).filter((el) => !visibleIds.has(el.id))
    }

    props.onSelect(newSelected)
  }

  function onSelectAll() {
    const newSelected = [...(props.selectedEntities ?? [])]

    filteredEntities.forEach((entity) => {
      const existingEntity = newSelected.find((sel) => sel.id === entity.id)

      if (!existingEntity) {
        newSelected.push({
          ...entity,
          subItems: entity.subItems || [],
        })
      } else {
        const mergedSubItems = Array.from(
          new Set([
            ...(existingEntity.subItems ?? []),
            ...(entity.subItems ?? []),
          ])
        )
        existingEntity.subItems = mergedSubItems
      }
    })

    if (!props.singleSelector) props.onSelect(newSelected)
  }

  const onSearch = (search: string) => {
    setSearch(search)
    setDebouncedSearch(search)
  }

  const onToggleExpand = (entity: EntitySelectEntity, expanded: boolean) => {
    props.onItemExpandedChange(entity.id, expanded)
    setFilteredEntities(
      filteredEntities.map((e) =>
        e.id === entity.id ? { ...e, expanded: !entity.expanded } : e
      )
    )
  }

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredEntities(props.entities)
      return
    }

    if (groupView && !props.applySearchToGroup) {
      const nextEntities = props.entities.map((entity) => {
        const entityScore = getBestScoreForEntity(entity, debouncedSearch)

        const filteredSubItems = entity.subItems
          ?.map((el) => ({
            ...el,
            score: getMatchScore(
              debouncedSearch,
              el.subSearchKeys ?? [el.subName]
            ),
          }))
          .filter((subEntity) => subEntity.score < Infinity)
          .sort((a, b) => a.score - b.score)

        return {
          ...entity,
          score: entityScore,
          expanded: entity.expanded ?? (filteredSubItems?.length ?? 0) > 0,
          subItems: filteredSubItems,
        }
      })

      const filteredNextEntities = nextEntities
        .filter((entity) => entity.score < Infinity)
        .sort((a, b) => a.score - b.score)

      setFilteredEntities(filteredNextEntities)
    } else {
      const nextEntities = props.entities
        .map((entity) => {
          const entityScore = getMatchScore(
            debouncedSearch,
            entity.searchKeys ?? [entity.name]
          )
          return { ...entity, score: entityScore }
        })
        .filter((entity) => entity.score < Infinity)
        .sort((a, b) => a.score - b.score)

      setFilteredEntities(nextEntities)
    }
  }, [
    debouncedSearch,
    props.entities,
    props.applySearchToGroup,
    groupView,
    setFilteredEntities,
  ])

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  if (props.alwaysOpen) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
          !props.width ? "w-full" : "w-fit"
        )}
      >
        <Content
          groupView={groupView}
          entities={filteredEntities}
          groups={props.groups}
          onGroupChange={props.onGroupChange}
          selectedGroup={props.selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={props.selectedEntities ?? []}
          search={search}
          onSearch={onSearch}
          onToggleExpand={onToggleExpand}
          searchPlaceholder={props.searchPlaceholder}
          selectAllLabel={props.selectAllLabel}
          clearLabel={props.clearLabel}
          selectedLabel={props.selectedLabel}
          singleSelector={props.singleSelector}
          loading={props.loading}
          notFoundTitle={props.notFoundTitle}
          notFoundSubtitle={props.notFoundSubtitle}
          width={props.width ?? containerWidth - 2}
          disabled={props.disabled}
          hiddenAvatar={props.hiddenAvatar}
          onCreate={props.onCreate}
          onCreateLabel={props.onCreateLabel}
        />
      </div>
    )
  }

  return (
    <Popover {...props} onOpenChange={onOpenChange} open={open}>
      <PopoverTrigger
        className="w-full"
        disabled={props.disabled}
        aria-label={props.label || props.placeholder}
      >
        {props.children ? (
          props.children
        ) : (
          <Trigger
            selected={props.selectedItemsCopy}
            selectedEntities={props.selectedEntities ?? []}
            hiddenAvatar={props.hiddenAvatar}
            label={props.label}
            labelIcon={props.labelIcon}
            icon={props.icon}
            error={props.error}
            status={props.status}
            hint={props.hint}
            hideLabel={props.hideLabel}
            maxLength={props.maxLength}
            value={props.value?.toString() ?? undefined}
            disabled={props.disabled}
            placeholder={props.placeholder}
            loading={props.alwaysOpen ? props.loading : false}
            required={props.required}
            readonly={props.readonly}
            append={props.append}
          />
        )}
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        )}
      >
        <Content
          groupView={groupView}
          entities={filteredEntities}
          groups={props.groups}
          onGroupChange={props.onGroupChange}
          selectedGroup={props.selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={props.selectedEntities ?? []}
          search={search}
          onSearch={onSearch}
          onToggleExpand={onToggleExpand}
          searchPlaceholder={props.searchPlaceholder}
          selectAllLabel={props.selectAllLabel}
          clearLabel={props.clearLabel}
          selectedLabel={props.selectedLabel}
          singleSelector={props.singleSelector}
          loading={props.loading}
          notFoundTitle={props.notFoundTitle}
          notFoundSubtitle={props.notFoundSubtitle}
          width={props.width}
          disabled={props.disabled}
          hiddenAvatar={props.hiddenAvatar}
          actions={props.actions}
          onCreate={props.onCreate}
          onCreateLabel={props.onCreateLabel}
        />
      </PopoverContent>
    </Popover>
  )
}

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

function getWordsFromText(text: string): string[] {
  return normalizeText(text)
    .split(/\s+/)
    .filter((word) => word.length > 0)
}

function getMatchScore(text = "", searchKeys: string[]): number {
  const searchWords = getWordsFromText(text)

  if (searchWords.length === 0) {
    return Infinity
  }

  for (const key of searchKeys) {
    const normalizedKey = normalizeText(key)
    const keyWords = getWordsFromText(key)
    // Check if the search text is directly contained (highest priority)
    const normalizedSearch = normalizeText(text)
    if (normalizedKey.includes(normalizedSearch)) {
      return 1
    }
    // Check if all search words are contained in the key (word-by-word matching)
    const allWordsMatch = searchWords.every((searchWord) =>
      keyWords.some((keyWord) => keyWord.includes(searchWord))
    )

    if (allWordsMatch) {
      return 1
    }
  }

  return Infinity
}

function getBestScoreForEntity(entity: EntitySelectEntity, search: string) {
  const nameScore = getMatchScore(search, entity.searchKeys ?? [entity.name])

  let bestSubItemScore = Infinity
  if (entity.subItems?.length) {
    bestSubItemScore = entity.subItems.reduce((minScore, subItem) => {
      const current = getMatchScore(
        search,
        subItem.subSearchKeys ?? [subItem.subName]
      )
      return Math.min(minScore, current)
    }, Infinity)
  }

  return Math.min(nameScore, bestSubItemScore)
}
