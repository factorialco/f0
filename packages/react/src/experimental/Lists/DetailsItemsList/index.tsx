import React, { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { DataTestIdWrapper, WithDataTestIdProps } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { DetailsItem, DetailsItemType } from "../DetailsItem"

interface DetailsItemsListProps extends WithDataTestIdProps {
  title?: string
  tableView?: boolean
  details: DetailsItemType[]
  showSeeMore?: boolean
  onClickSeeMore?: () => void
}

/**
 * Leaf component wrapping the "see more" button so `useI18n()` is only read
 * when `showSeeMore` is true. Keeps DetailsItemsList renderable without an
 * `I18nProvider` for consumers (and tests) that don't opt into the button.
 */
const SeeMoreButton = ({ onClick }: { onClick?: () => void }) => {
  const i18n = useI18n()
  return (
    <F0Button
      label={i18n.actions.seeMore}
      onClick={onClick}
      variant="neutral"
    />
  )
}

const _DetailsItemsList = forwardRef<HTMLDivElement, DetailsItemsListProps>(
  function DetailsItemList(
    {
      title,
      tableView = false,
      details,
      dataTestId,
      showSeeMore,
      onClickSeeMore,
    },
    ref
  ) {
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <div ref={ref} className="flex flex-col gap-4">
          {!!title && (
            <p className="mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary">
              {title.toLocaleUpperCase()}
            </p>
          )}
          <div
            className={cn(
              "flex flex-col",
              tableView
                ? "rounded-md border border-solid border-f1-border-secondary"
                : "gap-3"
            )}
          >
            {details?.map((item, index) => (
              <React.Fragment key={item.title}>
                <DetailsItem
                  title={item.title}
                  key={item.title}
                  content={item.content}
                  spacingAtTheBottom={item.spacingAtTheBottom}
                  isHorizontal={tableView}
                  verticalLayout={item.verticalLayout}
                />
                {tableView && index !== details.length - 1 && (
                  <div className="h-[1px] w-full bg-f1-border-secondary" />
                )}
              </React.Fragment>
            ))}
          </div>
          {showSeeMore && <SeeMoreButton onClick={onClickSeeMore} />}
        </div>
      </DataTestIdWrapper>
    )
  }
)

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const DetailsItemsList = experimentalComponent(
  "DetailsItemsList",
  _DetailsItemsList
)
