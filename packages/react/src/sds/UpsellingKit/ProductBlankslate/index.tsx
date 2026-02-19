import { forwardRef } from "react"

// packages/react/src/experimental/ProductBlankslate/index.tsx
import { F0AvatarModule, ModuleId } from "@/components/avatars/F0AvatarModule"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus, Variant } from "@/components/tags/F0TagStatus"
import { CheckCircle } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

type ProductBlankslateProps = {
  title: string
  subtitle?: string
  image: string
  benefits: string[]
  actions?: React.ReactNode
  withShadow?: boolean
  module?: ModuleId
  moduleName?: string
  tag?: {
    label: string
    icon: IconType
  }
  promoTag?: {
    label: string
    variant?: Variant
  }
}

const Benefits = ({ benefits }: { benefits: string[] }) => (
  <div className="flex flex-col gap-2">
    {benefits.map((text, idx) => (
      <BenefitItem key={idx} text={text} />
    ))}
  </div>
)

interface BenefitItemProps {
  text: string
}

const BenefitItem = ({ text }: BenefitItemProps) => (
  <div className="flex flex-row items-start gap-2">
    <F0Icon icon={CheckCircle} size="md" className="text-f1-icon-positive" />
    <span>{text}</span>
  </div>
)

const _ProductBlankslate = forwardRef<HTMLDivElement, ProductBlankslateProps>(
  (
    {
      title,
      image,
      benefits,
      actions,
      withShadow = true,
      module,
      moduleName,
      tag,
      promoTag,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
          withShadow && "shadow-md"
        )}
      >
        {/* Imagen 16:9 */}
        <div className="aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1">
          <img
            src={image}
            alt=""
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-center gap-8 px-8 py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                {module && <F0AvatarModule module={module} />}
                {moduleName && (
                  <p className="text-base font-medium text-f1-foreground">
                    {moduleName}
                  </p>
                )}
              </div>
              {(tag || promoTag) && (
                <div className="flex justify-start gap-2">
                  {tag && <F0TagRaw icon={tag.icon} text={tag.label} />}
                  {promoTag && (
                    <F0TagStatus
                      variant={promoTag.variant || "positive"}
                      text={promoTag.label}
                    />
                  )}
                </div>
              )}
              <h2 className="font-bold text-xl text-f1-foreground">{title}</h2>
            </div>
            <Benefits benefits={benefits} />
          </div>
          {actions && <div className="flex gap-3">{actions}</div>}
        </div>
      </div>
    )
  }
)

_ProductBlankslate.displayName = "ProductBlankslate"

export const ProductBlankslate = withDataTestId(_ProductBlankslate)
