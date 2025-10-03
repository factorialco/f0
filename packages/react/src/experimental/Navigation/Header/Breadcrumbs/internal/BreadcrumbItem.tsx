import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { BreadcrumbSelect } from "@/experimental/Navigation/Header"
import { BreadcrumbSkeleton } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbSkeleton"
import { BreadcrumbItemType } from "@/experimental/Navigation/Header/Breadcrumbs/types"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  BreadcrumbPage,
  BreadcrumbItem as ShadBreadcrumbItem,
  BreadcrumbLink as ShadBreadcrumbLink,
} from "@/ui/breadcrumb"
import { motion } from "motion/react"
import { forwardRef, PropsWithChildren, ReactNode } from "react"
import { BreadcrumbSeparator } from "./BreadcrumbSeparator"

interface BreadcrumbItemProps {
  item: BreadcrumbItemType
  isLast: boolean
  isOnly?: boolean
  isFirst?: boolean
}

type ContentType = "loading" | "select" | "page" | "link"

const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  PropsWithChildren<BreadcrumbItemProps>
>(({ item, isLast, isOnly = false, isFirst = false, children }, ref) => (
  <ShadBreadcrumbItem key={item.id} ref={ref}>
    {!isFirst && <BreadcrumbSeparator />}
    <BreadcrumbContent
      item={item}
      isLast={isLast}
      isOnly={isOnly}
      isFirst={isFirst}
    />
    {children}
  </ShadBreadcrumbItem>
))

BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbContent = forwardRef<HTMLDivElement, BreadcrumbItemProps>(
  ({ item, isLast, isOnly = false, isFirst = false }, ref) => {
    const isLoading = "loading" in item && item.loading

    const contentType: ContentType = isLoading
      ? "loading"
      : "type" in item && item.type
        ? item.type
        : isLast || isOnly
          ? "page"
          : "link"

    const content = (
      <motion.div
        layoutId={`breadcrumb-${item.id}`}
        className={cn(
          "flex items-center gap-2 px-1.5",
          isFirst && "pl-0",
          isOnly && "text-2xl font-semibold"
        )}
        transition={{ duration: 0.15 }}
      >
        {!isLoading &&
          "module" in item &&
          item.module &&
          (isOnly || isFirst) && (
            <F0AvatarModule module={item.module} size={isOnly ? "lg" : "sm"} />
          )}
        <span className="truncate">
          {!isLoading && "label" in item ? item.label : ""}
        </span>
      </motion.div>
    )

    // Different renders depending on the breadcrumbtype
    const contents: Record<ContentType, ReactNode> = {
      loading: <BreadcrumbSkeleton />,
      select: "type" in item &&
        item.type === "select" &&
        (item.options || item.source) && (
          <>
            <BreadcrumbSelect
              label={item.label}
              hideLabel
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              source={item.source as any}
              options={item.options}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              mapOptions={item.mapOptions as any}
              defaultItem={item.defaultItem}
              onChange={item.onChange}
              value={item.value}
              clearable={false}
              showSearchBox={item.searchbox}
            />
          </>
        ),
      page: (
        <BreadcrumbPage aria-hidden="true" className="p-0">
          {content}
        </BreadcrumbPage>
      ),
      link: (
        <ShadBreadcrumbLink asChild className="p-0">
          <Link
            {...("href" in item && !("type" in item) ? item : {})}
            className="block"
          >
            {content}
          </Link>
        </ShadBreadcrumbLink>
      ),
    }

    return (
      <motion.div
        ref={ref}
        layout
        className={cn(isLoading && "max-w-40")}
        transition={{ duration: 0.15 }}
      >
        {contents[contentType]}
      </motion.div>
    )
  }
)

BreadcrumbContent.displayName = "BreadcrumbContent"

export { BreadcrumbItem }
