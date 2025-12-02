import { F0Select } from "@/components/F0Select"
import { VirtualItem } from "@tanstack/react-virtual"
import React, { useCallback, useMemo } from "react"
import { Action } from "../../../../../components/F0Select/components/SelectBottomActions"
import { cn } from "../../../../../lib/utils"
import { Spinner } from "../../../../Information/Spinner"
import { VirtualList } from "../../../../Navigation/VirtualList"
import { CreateItem } from "../../CreateItem"
import { EntitySelectListItem } from "../../ListItem"
import {
  EntityId,
  EntitySelectEntity,
  EntitySelectNamedGroup,
  EntitySelectSubEntity,
  FlattenedItem,
} from "../../types"
import { Footer } from "./Footer"
import { Searcher } from "./Searcher"

const VIRTUAL_LIST_HEIGHT = 384
const ITEM_SIZE_DEFAULT = 36
const ITEM_SIZE_PARENT = 37
const SCROLL_TIMEOUT_SHORT = 1
const FOCUS_TIMEOUT = 200
const FOCUSABLE_SELECTOR = '[data-avatarname-navigator-element="true"]'

interface MainContentProps {
  groupView: boolean
  entities: EntitySelectEntity[]
  groups: EntitySelectNamedGroup[]
  selectedGroup: string
  search: string
  onSelect: (entity: EntitySelectEntity) => void
  onRemove: (entity: EntitySelectEntity) => void
  onSubItemRemove: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onSubItemSelect: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEntities?: EntitySelectEntity[]
  onGroupChange: (key: string | null) => void
  onToggleExpand: (entity: EntitySelectEntity, expanded: boolean) => void
  notFoundTitle: string
  notFoundSubtitle: string
  className?: string
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  singleSelector?: boolean
  loading?: boolean
  disabled?: boolean
  hiddenAvatar?: boolean
  actions?: Action[]
  onCreate?: (partialName: string) => void
  onCreateLabel?: string
}

export const MainContent: React.FC<MainContentProps> = ({
  groupView,
  entities,
  groups,
  selectedGroup,
  search,
  onSelect,
  onRemove,
  onSubItemRemove,
  onSubItemSelect,
  onClear,
  onSelectAll,
  onSearch,
  selectedEntities = [],
  onGroupChange,
  onToggleExpand,
  searchPlaceholder,
  selectAllLabel,
  clearLabel,
  notFoundTitle,
  notFoundSubtitle,
  className,
  actions,
  onCreate,
  onCreateLabel,
  singleSelector = false,
  loading = false,
  disabled = false,
  hiddenAvatar = false,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null)

  const totalFilteredEntities = useMemo(
    () =>
      groupView
        ? entities.reduce(
            (acc, entity) => acc + (entity.subItems?.length ?? 0),
            0
          )
        : entities.length,
    [entities, groupView]
  )

  const goToFirst = useCallback(() => {
    setTimeout(() => {
      ref.current?.scrollTo({ top: 0 })
    }, SCROLL_TIMEOUT_SHORT)
    setTimeout(() => {
      const allFocusable = Array.from(
        document.querySelectorAll(FOCUSABLE_SELECTOR)
      ) as HTMLElement[]
      allFocusable[0]?.focus()
    }, FOCUS_TIMEOUT)
  }, [])

  const goToLast = useCallback(() => {
    setTimeout(() => {
      ref.current?.scrollTo({ top: ref.current?.scrollHeight })
    }, SCROLL_TIMEOUT_SHORT)
    setTimeout(() => {
      const allFocusable = Array.from(
        document.querySelectorAll(FOCUSABLE_SELECTOR)
      ) as HTMLElement[]
      allFocusable[allFocusable.length - 1]?.focus()
    }, FOCUS_TIMEOUT)
  }, [])

  const selectedEntitiesMap = useMemo(
    () => new Map(selectedEntities.map((entity) => [entity.id, entity])),
    [selectedEntities]
  )

  const getSelectionState = useCallback(
    (entity: EntitySelectEntity) => {
      const selectedEntity = selectedEntitiesMap.get(entity.id)

      if (!groupView) {
        return {
          selected: !!selectedEntity,
          partialSelected: !!selectedEntity,
        }
      }

      const selectedSubItems = (entity.subItems ?? []).filter((subItem) =>
        selectedEntity?.subItems?.some(
          (selectedSubItem) => selectedSubItem.subId === subItem.subId
        )
      )

      const selected =
        (entity.subItems?.length ?? 0) === selectedSubItems.length
      const partialSelected = !selected && selectedSubItems.length > 0

      return { selected, partialSelected }
    },
    [groupView, selectedEntitiesMap]
  )

  const itemRenderer = useCallback(
    (vi: VirtualItem) => {
      if (vi.index === 0 && onCreate) {
        return (
          <CreateItem
            label={onCreateLabel ?? ""}
            onCreate={() => onCreate?.(search)}
            goToFirst={goToFirst}
            goToLast={goToLast}
          />
        )
      }

      const index = onCreate ? vi.index - 1 : vi.index
      const entity = entities[index]
      const { selected, partialSelected } = getSelectionState(entity)

      return (
        <EntitySelectListItem
          expanded={entity.expanded ?? false}
          onExpand={() => onToggleExpand(entity, true)}
          search={search}
          groupView={groupView}
          key={entity.id}
          entity={entity}
          onSelect={onSelect}
          onRemove={onRemove}
          selected={selected}
          partialSelected={partialSelected}
          showGroupIcon={isTeamGroup(groups, selectedGroup)}
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
          disabled={disabled}
          hiddenAvatar={hiddenAvatar}
        />
      )
    },
    [
      onCreate,
      onCreateLabel,
      disabled,
      entities,
      getSelectionState,
      goToFirst,
      goToLast,
      groupView,
      groups,
      hiddenAvatar,
      onRemove,
      onSelect,
      onToggleExpand,
      search,
      selectedGroup,
      singleSelector,
    ]
  )

  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? entities.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
            subSearchKeys: el.searchKeys,
          } as EntitySelectSubEntity,
        }))
      : entities
          .flatMap((entity) => {
            const foundSelected = findSelectedEntity(
              selectedEntities ?? [],
              entity.id
            )
            return [
              {
                parent: null,
                subItem: {
                  subId: entity.id,
                  subName: entity.name,
                  subAvatar: entity.avatar,
                  expanded: entity.expanded ?? foundSelected?.expanded ?? false,
                  subItems: entity.subItems,
                  subSearchKeys: entity.searchKeys,
                },
              },
              ...(entity.subItems ?? []).map((subItem) => ({
                parent: {
                  ...entity,
                  expanded: entity.expanded ?? foundSelected?.expanded ?? false,
                },
                subItem,
              })),
            ]
          })
          .filter(
            (el) =>
              (!el.parent || el.parent.expanded) &&
              (!!el.parent ||
                (!!el.subItem.subItems && el.subItem.subItems.length > 0))
          )
  }, [groupView, entities, selectedEntities])

  const itemFlattenedRenderer = useCallback(
    (vi: VirtualItem) => {
      if (vi.index === 0 && onCreate) {
        return (
          <CreateItem
            label={onCreateLabel ?? ""}
            onCreate={() => onCreate?.(search)}
            goToFirst={goToFirst}
            goToLast={goToLast}
          />
        )
      }

      const index = onCreate ? vi.index - 1 : vi.index
      const parent = flattenedList[index].parent
      const subItem = flattenedList[index].subItem
      if (!parent) {
        const recoveredEntity: EntitySelectEntity = {
          id: subItem.subId,
          name: subItem.subName,
          avatar: subItem.subAvatar,
          subItems: subItem.subItems,
          expanded: subItem.expanded,
          searchKeys: subItem.subSearchKeys,
        }
        const selectedEntity = findSelectedEntity(
          selectedEntities,
          recoveredEntity.id
        )
        const selectedSubItems = (recoveredEntity?.subItems ?? []).filter(
          (subItem) =>
            selectedEntity?.subItems?.some(
              (selectedSubItem) => selectedSubItem.subId === subItem.subId
            )
        )
        const selected =
          (recoveredEntity.subItems?.length ?? 0) === selectedSubItems.length
        const partialSelected = !selected && selectedSubItems.length > 0

        return (
          <EntitySelectListItem
            groupView
            expanded={recoveredEntity.expanded ?? false}
            onExpand={(expanded) => onToggleExpand(recoveredEntity, expanded)}
            search={search}
            entity={recoveredEntity}
            onSelect={onSelect}
            onRemove={onRemove}
            selected={selected}
            partialSelected={partialSelected}
            showGroupIcon={
              groups.find((el) => el.value === selectedGroup)?.groupType ===
              "team"
            }
            singleSelector={singleSelector}
            goToFirst={goToFirst}
            goToLast={goToLast}
            hideLine={index === flattenedList.length - 1}
            disabled={disabled}
            hiddenAvatar={hiddenAvatar}
          />
        )
      }

      let selected = !!findSelectedEntity(selectedEntities, subItem.subId)
      if (!selected) {
        const selectedParentEntity = findSelectedEntity(
          selectedEntities,
          parent.id
        )
        const selectedSubItems = (parent?.subItems ?? []).filter((subItem) =>
          selectedParentEntity?.subItems?.some(
            (selectedSubItem) => selectedSubItem.subId === subItem.subId
          )
        )
        selected = !!selectedSubItems.find((el) => el.subId === subItem.subId)
      }

      return (
        <EntitySelectListItem
          expanded={false}
          onExpand={() => null}
          search={search}
          groupView={false}
          entity={{
            id: subItem.subId,
            name: subItem.subName,
            avatar: subItem.subAvatar,
            searchKeys: subItem.subSearchKeys,
          }}
          onSelect={() => {
            onSubItemSelect(parent, subItem)
          }}
          onRemove={() => onSubItemRemove(parent, subItem)}
          selected={!!selected}
          partialSelected={false}
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
          isChild
          hiddenAvatar={hiddenAvatar}
        />
      )
    },
    [
      flattenedList,
      selectedEntities,
      search,
      singleSelector,
      goToFirst,
      goToLast,
      onSelect,
      onRemove,
      groups,
      disabled,
      onToggleExpand,
      selectedGroup,
      onSubItemSelect,
      onSubItemRemove,
      hiddenAvatar,
      onCreate,
      onCreateLabel,
    ]
  )

  const [allVisibleSelected, anyVisibleSelected] = useMemo(() => {
    if (!entities.length) {
      return [false, false]
    }

    let visibleCount = 0
    let selectedVisibleCount = 0

    if (!groupView) {
      visibleCount = entities.length
      selectedVisibleCount = entities.reduce(
        (acc, { id }) => acc + (selectedEntitiesMap.has(id) ? 1 : 0),
        0
      )
    } else {
      const selectedSubIds = new Set(
        [...selectedEntitiesMap.values()].flatMap(
          (selParent) =>
            selParent.subItems?.map((selectedSub) => selectedSub.subId) ?? []
        )
      )

      entities.forEach((fe) => {
        const subItems = fe.subItems ?? []
        visibleCount += subItems.length
        selectedVisibleCount += subItems.filter((sub) =>
          selectedSubIds.has(sub.subId)
        ).length
      })
    }

    const allSelected =
      visibleCount > 0 && selectedVisibleCount === visibleCount
    const anySelected = selectedVisibleCount > 0

    return [allSelected, anySelected]
  }, [entities, selectedEntitiesMap, groupView])

  const totalFlattenedItems = flattenedList.length

  const anySelectOrClearAction =
    !singleSelector && (selectAllLabel || clearLabel)
  const anyAction = actions && actions.length > 0
  const showFooter =
    !loading && ((!singleSelector && anySelectOrClearAction) || anyAction)

  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-l-xl border-0",
        singleSelector || loading ? "rounded-r-xl" : "",
        className
      )}
    >
      <header
        className={cn(
          "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
          singleSelector || loading ? "rounded-t-xl border-r-0" : ""
        )}
      >
        <div className="flex-1">
          <Searcher
            search={search}
            onSearch={onSearch}
            searchPlaceholder={searchPlaceholder}
            goToFirst={goToFirst}
            goToLast={goToLast}
          />
        </div>
        {groups && groups.length > 1 && (
          <div className="flex-1">
            <F0Select
              label="Group"
              hideLabel
              disabled={loading}
              onChange={onGroupChange}
              options={groups}
              value={selectedGroup}
              className={cn(
                "h-8 rounded-[10px] bg-transparent py-[5px]",
                selectedGroup === "all" ? "text-f1-foreground-secondary" : ""
              )}
            />
          </div>
        )}
      </header>
      <section
        className={cn(
          "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
          !showFooter ? "rounded-b-xl border-r-0" : ""
        )}
      >
        {loading && (
          <div className="flex h-full w-full flex-row items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && !totalFilteredEntities && (
          <div
            className="absolute flex w-full flex-col items-center justify-center gap-0.5 p-5"
            style={{
              height: VIRTUAL_LIST_HEIGHT,
            }}
          >
            <span className="text-lg font-medium">{notFoundTitle}</span>
            <span className="text-center text-f1-foreground-secondary">
              {notFoundSubtitle}
            </span>
          </div>
        )}
        {!loading && (!!totalFilteredEntities || onCreate) && (
          <div className="h-full">
            {!groupView ? (
              <VirtualList
                height={VIRTUAL_LIST_HEIGHT}
                itemCount={entities.length + (onCreate ? 1 : 0)}
                itemSize={ITEM_SIZE_DEFAULT}
                renderer={itemRenderer}
                ref={ref}
              />
            ) : (
              <VirtualList
                height={VIRTUAL_LIST_HEIGHT}
                itemCount={totalFlattenedItems + (onCreate ? 1 : 0)}
                itemSize={(index) => {
                  if (index === 0 && onCreate) return ITEM_SIZE_DEFAULT
                  const adjustedIndex = onCreate ? index - 1 : index
                  return flattenedList[adjustedIndex]?.parent === null
                    ? ITEM_SIZE_PARENT
                    : ITEM_SIZE_DEFAULT
                }}
                renderer={itemFlattenedRenderer}
                ref={ref}
              />
            )}
          </div>
        )}
      </section>
      <Footer
        onSelectAll={onSelectAll}
        onClear={onClear}
        singleSelector={singleSelector}
        totalFilteredEntities={totalFilteredEntities}
        allVisibleSelected={allVisibleSelected}
        anyVisibleSelected={anyVisibleSelected}
        selectAllLabel={selectAllLabel}
        clearLabel={clearLabel}
        disabled={disabled}
        actions={actions}
      />
    </div>
  )
}

const findSelectedEntity = (entities: EntitySelectEntity[], id: EntityId) => {
  return entities.find((el) => el.id === id)
}

const isTeamGroup = (
  groups: EntitySelectNamedGroup[],
  selectedGroup: string
) => {
  return groups.find((el) => el.value === selectedGroup)?.groupType === "team"
}
