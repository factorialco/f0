import { F0Icon, IconType } from "../../../../../components/F0Icon"
import { cn } from "../../../../../lib/utils"

type Props = {
  label: string
  icon: IconType
  iconClassName?: string
  count: number
  onClick?: () => void
}

export type WidgetHighlightButtonProps = Props

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ onClick, children }) => {
  const className = "block rounded-lg border border-solid border-transparent p-[1px] -m-1"

  return onClick ? (
    <a
      className={cn(
        className,
        "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"
      )}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
    </a>
  ) : (
    <div className={className} tabIndex={1}>
      {children}
    </div>
  )
}

export function WidgetHighlightButton({ label, count, icon, iconClassName, onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      <div
        className={cn(
          "flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",
          onClick && "hover:border-f1-border-hover"
        )}
      >
        <div className="flex flex-row items-center">
          <p className="line-clamp-1 flex-1 text-f1-foreground-secondary">{label}</p>
          <F0Icon icon={icon} size="md" className={iconClassName} />
        </div>
        <p className="line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground">{count}</p>
      </div>
    </Wrapper>
  )
}
