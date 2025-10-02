import { Button } from "@/components/Actions/Button"
import { ButtonInternal } from "@/components/Actions/Button/internal"
import { F0Icon, IconType } from "@/components/F0Icon"
import { ProductCard } from "@/components/UpsellingKit/ProductCard"
import AlertCircle from "@/icons/app/AlertCircle"
import ChevronRight from "@/icons/app/ChevronRight"
import CrossIcon from "@/icons/app/Cross"
import Megaphone from "@/icons/app/Megaphone"
import { Image } from "@/lib/imageHandler"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { Carousel } from "@/experimental/Navigation/Carousel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Skeleton } from "@/ui/skeleton"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  ComponentProps,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react"

type ProductUpdate = {
  title: string
  href: string
  mediaUrl: string
  updated: string
  unread?: boolean
  onClick?: ComponentProps<typeof DropdownMenuItem>["onClick"]
}

type ProductUpdatesProp = {
  label: string
  updatesPageUrl: string
  getUpdates: () => Promise<Array<ProductUpdate>>
  hasUnread?: boolean
  currentModule: string
  onOpenChange?: ComponentProps<typeof DropdownMenu>["onOpenChange"]
  onHeaderClick?: ComponentProps<typeof DropdownMenuTrigger>["onClick"]
  onItemClick?: ComponentProps<typeof DropdownMenuItem>["onClick"]
  emptyScreen: {
    title: string
    description: string
    buttonText: string
  }
  errorScreen: {
    title: string
    description: string
    buttonText: string
  }
  crossSelling?: {
    isVisible: boolean
    sectionTitle: string

    onClose?: () => void
    products: Array<{
      title: string
      description: string
      onClick: () => void
      module: ModuleId | IconType
      dismissable: boolean
      onClose?: () => void
      trackVisibility?: (open: boolean) => void
      type?: "one-campaign" | undefined
    }>
  }
}

const ProductUpdates = ({
  currentModule,
  label,
  getUpdates,
  updatesPageUrl,
  emptyScreen,
  errorScreen,
  onOpenChange = () => {},
  onHeaderClick = () => {},
  onItemClick = () => {},
  hasUnread = false,
  crossSelling,
}: ProductUpdatesProp) => {
  const [state, setState] = useState<"idle" | "fetching" | "error">("idle")
  const [updates, setUpdates] = useState<Array<ProductUpdate> | null>(null)
  const [featuredUpdate, ...restUpdates] = updates ?? []
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setUpdates(null)
    setState("idle")
  }, [currentModule])

  const invokeGetUpdates = useCallback(async () => {
    try {
      setState("fetching")
      const response = await getUpdates()
      setState("idle")
      setUpdates(response)
    } catch {
      setState("error")
    }
  }, [getUpdates])

  return (
    <DropdownMenu
      open={open}
      onOpenChange={async (isOpen) => {
        setOpen(isOpen)
        if (isOpen && updates === null) {
          invokeGetUpdates()
        }
        onOpenChange(isOpen)
      }}
    >
      <DropdownMenuTrigger asChild>
        <ButtonInternal
          variant="outline"
          icon={Megaphone}
          hideLabel
          round
          label={label}
          pressed={open}
          append={
            hasUnread && (
              <UnreadDot className="absolute -right-0.5 -top-[1px]" />
            )
          }
        />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={8}
          collisionPadding={20}
          align="end"
          hideWhenDetached
          className="min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col"
          style={{ maxHeight: "min(90vh, 760px)" }}
        >
          <Header title={label} url={updatesPageUrl} onClick={onHeaderClick} />
          {state === "fetching" && <ProductUpdatesSkeleton />}
          <div className="scrollbar-macos flex-1 overflow-y-auto">
            {state === "idle" && updates !== null && updates.length === 0 && (
              <div className="p-2 pt-0">
                <NoUpdates {...emptyScreen} buttonUrl={updatesPageUrl} />
              </div>
            )}
            {state === "idle" && updates !== null && updates.length > 0 && (
              <div className="px-1">
                <FeaturedDropdownItem
                  {...featuredUpdate}
                  onClick={onItemClick}
                />
                {updates.length > 1 && (
                  <>
                    <div className="pb-1">
                      {restUpdates.map((update, index) => (
                        <DropdownItem
                          key={index}
                          {...update}
                          onClick={onItemClick}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            {state === "error" && (
              <div className="p-2 pt-0">
                <ErrorScreen
                  {...errorScreen}
                  onClick={() => {
                    invokeGetUpdates()
                  }}
                />
              </div>
            )}
          </div>
          {state === "idle" && crossSelling && crossSelling.isVisible && (
            <DiscoverMoreProducts
              isVisible={crossSelling.isVisible}
              onClose={crossSelling.onClose}
              crossSelling={crossSelling}
              onDropdownClose={() => setOpen(false)}
            />
          )}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

const FeaturedDropdownItem = ({
  title,
  href,
  mediaUrl,
  unread,
  updated,
  onClick,
}: ProductUpdate) => {
  const itemClass = "flex flex-col items-stretch w-full"

  const isVideo = mediaUrl?.includes(".mp4")

  return (
    <DropdownMenuPrimitive.Item
      onClick={onClick}
      asChild
      className="relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <Link
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className={cn(itemClass, "text-f1-foreground no-underline")}
      >
        <div className="px-1 pt-1">
          {isVideo ? (
            <div className="overflow-clip rounded border border-solid border-f1-border-secondary">
              <video
                src={mediaUrl}
                className="block aspect-video w-full bg-f1-background-secondary object-contain object-center"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ) : (
            <div className="overflow-clip rounded border border-solid border-f1-border-secondary">
              <Image
                fetchPriority="high"
                src={mediaUrl}
                className="block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              />
            </div>
          )}
        </div>
        <div className="py-2 pl-2 pr-4">
          <div className="flex items-start gap-4">
            <div className="flex-1 *:text-base">
              <h3 className="font-medium">{title}</h3>
              <p className="font-normal text-f1-foreground-secondary">
                {updated}
              </p>
            </div>
            {unread && <UnreadDot className="mt-1.5" />}
          </div>
        </div>
      </Link>
    </DropdownMenuPrimitive.Item>
  )
}

const DropdownItem = ({
  title,
  href,
  updated,
  unread = false,
  onClick,
}: ProductUpdate) => {
  const itemClass = cn("flex flex-col items-stretch gap-3 w-full")

  return (
    <DropdownMenuItem asChild className={itemClass} onClick={onClick}>
      <Link
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className={cn(
          itemClass,
          "text-f1-foreground no-underline hover:cursor-pointer"
        )}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 *:text-base">
            <h3 className="text-pretty font-medium">{title}</h3>
            <p className="font-normal text-f1-foreground-secondary">
              {updated}
            </p>
          </div>
          {unread && <UnreadDot className="mt-1.5" />}
        </div>
      </Link>
    </DropdownMenuItem>
  )
}

const Header = ({
  title,
  url,
  onClick,
}: {
  title: string
  url: string
  onClick: ComponentProps<typeof Button>["onClick"]
}) => (
  <a
    href={url}
    className="flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground"
  >
    <h2 className="text-base font-medium">{title}</h2>
    <Button
      variant="outline"
      round
      size="sm"
      icon={ChevronRight}
      label={title}
      hideLabel
      onClick={onClick}
    />
  </a>
)

const BaseScreen = ({
  icon,
  button,
  title,
  description,
  iconWrapperClassName,
}: {
  button: ReactElement
  icon: ReactElement
  title: string
  description: string
  iconWrapperClassName?: string
}) => (
  <div className="w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12">
    <div className="flex flex-col items-center gap-4">
      <div
        className={cn(
          "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
          iconWrapperClassName
        )}
      >
        {icon}
      </div>
      <div className="flex flex-1 flex-col gap-1 text-center *:text-base">
        <h3 className="text-pretty font-medium">{title}</h3>
        <p className="font-normal text-f1-foreground-secondary">
          {description}
        </p>
      </div>
      {button}
    </div>
  </div>
)

const NoUpdates = ({
  title,
  buttonText,
  buttonUrl,
  description,
}: {
  buttonUrl: string
} & ProductUpdatesProp["emptyScreen"]) => (
  <BaseScreen
    title={title}
    description={description}
    icon={<F0Icon icon={Megaphone} size="lg" className="block" />}
    button={
      <Link href={buttonUrl}>
        <Button label={buttonText} />
      </Link>
    }
  />
)

const ErrorScreen = ({
  title,
  description,
  buttonText,
  onClick,
}: { onClick: () => void } & ProductUpdatesProp["errorScreen"]) => (
  <BaseScreen
    title={title}
    description={description}
    iconWrapperClassName="text-f1-icon-critical bg-f1-background-critical border-f1-critical"
    icon={<F0Icon icon={AlertCircle} size="lg" />}
    button={<Button variant="outline" label={buttonText} onClick={onClick} />}
  />
)

const ProductUpdatesSkeleton = () => (
  <div
    className="flex flex-col"
    role="status"
    aria-busy="true"
    aria-live="polite"
  >
    <div className="p-2">
      <Skeleton className="h-56 w-full rounded" />
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex flex-1 flex-col gap-2 py-1">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex flex-1 flex-col gap-2 py-1">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  </div>
)

const UnreadDot = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn("size-2 rounded bg-f1-background-selected-bold", className)}
  />
)

const DiscoverMoreProducts = ({
  isVisible,
  onClose,
  crossSelling,
  onDropdownClose,
}: {
  isVisible: boolean
  onClose?: () => void
  crossSelling: ProductUpdatesProp["crossSelling"]
  onDropdownClose: () => void
}) => {
  const [open, setOpen] = useState(isVisible)

  useEffect(() => {
    setOpen(isVisible)
  }, [isVisible])

  const handleClose = () => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  const handleProductClick = (onClick: () => void) => {
    setOpen(false)
    onDropdownClose()
    if (onClick) {
      onClick()
    }
  }

  return (
    open && (
      <>
        <DropdownMenuSeparator />
        <div className="px-1 pb-2">
          <div className="flex flex-row items-center justify-between px-3">
            <p className="text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary">
              {crossSelling?.sectionTitle}
            </p>

            {onClose && (
              <div className="relative z-10 h-6 w-6">
                <Button
                  variant="ghost"
                  icon={CrossIcon}
                  size="sm"
                  hideLabel
                  onClick={handleClose}
                  label="Close"
                />
              </div>
            )}
          </div>

          <Carousel
            columns={{
              default: 1,
            }}
            showDots
            showArrows={false}
          >
            {crossSelling?.products.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
                isVisible={true}
                trackVisibility={product.trackVisibility}
                onClick={() => handleProductClick(product.onClick)}
                type={product.type}
              />
            ))}
          </Carousel>
        </div>
      </>
    )
  )
}

export { ProductUpdates, type ProductUpdate, type ProductUpdatesProp }
