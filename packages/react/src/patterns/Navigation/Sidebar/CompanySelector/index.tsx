import { motion } from "motion/react"
import { ReactNode, useMemo, useState } from "react"

import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0Select } from "@/components/F0Select"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { ChevronDown, Circle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

interface Company {
  id: string
  name: string
  logo?: string
}

export type CompanySelectorProps = {
  companies: Company[]
  selected?: string
  onChange: (value: string) => void
  isLoading?: boolean
  withNotification?: boolean
  additionalOptions?: {
    label: string
    value: string
    icon?: IconType
    description?: string
    onClick?: () => void
  }[]
  /**
   * `"compact"` is the logo alone — no name, no chevron — for the module rail,
   * where the name has nowhere to go. It is the same select underneath: the
   * company list, the extra options and the switch all behave identically, and
   * the name reaches assistive tech through the trigger's `aria-label`.
   */
  variant?: "default" | "compact"
}

export function CompanySelector({
  companies,
  selected,
  onChange,
  isLoading = false,
  withNotification = false,
  additionalOptions = [],
  variant = "default",
}: CompanySelectorProps) {
  const selectedCompany = useMemo(
    () => companies.find((company) => company.id === selected) || companies[0],
    [companies, selected]
  )
  const isCompact = variant === "compact"

  if (isLoading) {
    return isCompact ? (
      <Skeleton className="size-6 rounded-md" />
    ) : (
      <div className="flex w-fit items-center gap-2 p-1.5">
        <Skeleton className="size-6" />
        <Skeleton className="h-3 w-14" />
      </div>
    )
  }

  if (companies.length + (additionalOptions?.length || 0) === 1) {
    // Nothing to switch to: the logo is identity, not a control.
    return isCompact ? (
      <CompanyAvatar
        company={selectedCompany}
        withNotification={withNotification}
      />
    ) : (
      <div className="p-1.5" style={{ maxWidth: "168px" }}>
        <SelectedCompanyLabel
          company={selectedCompany}
          withNotification={withNotification}
        />
      </div>
    )
  }

  return (
    <div className={isCompact ? "shrink-0" : "min-w-0 flex-1"}>
      <Selector
        companies={companies}
        selected={selectedCompany}
        onChange={onChange}
        additionalOptions={additionalOptions}
        compact={isCompact}
      >
        {isCompact ? (
          <CompanyAvatar
            company={selectedCompany}
            withNotification={withNotification}
          />
        ) : (
          <SelectedCompanyLabel
            company={selectedCompany}
            withNotification={withNotification}
          />
        )}
      </Selector>
    </div>
  )
}

const Selector = ({
  companies,
  selected,
  onChange,
  children,
  additionalOptions = [],
  compact = false,
}: {
  companies: Company[]
  selected: Company
  onChange: (value: string) => void
  children: ReactNode
  additionalOptions?: CompanySelectorProps["additionalOptions"]
  compact?: boolean
}) => {
  const i18n = useI18n()
  const [open, setOpen] = useState(false)
  const options = useMemo(
    () => [
      ...companies.map((company) => ({
        value: company.id,
        label: company.name,
        avatar: {
          type: "company",
          name: company.name,
          src: company.logo,
          "aria-label": `${company.name} logo`,
        } satisfies AvatarVariant,
      })),
      ...(additionalOptions.length ? [{ type: "separator" as const }] : []),
      ...additionalOptions,
    ],
    [companies, additionalOptions]
  )

  const handleChange = (value: string) => {
    const option = additionalOptions?.find((opt) => opt.value === value)
    if (option?.onClick) {
      option.onClick()
      return
    }
    onChange(value)
  }

  return (
    <F0Select
      label={i18n.navigation.sidebar.companySelector.label}
      hideLabel
      options={options}
      value={selected.id}
      onChange={handleChange}
      placeholder={i18n.navigation.sidebar.companySelector.placeholder}
      open={open}
      onOpenChange={setOpen}
    >
      <div
        className={cn(
          "group flex flex-nowrap items-center justify-center text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
          compact
            ? // The logo IS the control — hovering the avatar itself, with no
              // box around it, is what the rail's identity mark looks like.
              "shrink-0 cursor-pointer rounded-md"
            : "w-fit max-w-full gap-1 rounded p-1.5",
          focusRing()
        )}
        data-testid="company-selector-button"
        tabIndex={0}
        // With the name hidden, it has to reach assistive tech some other way.
        aria-label={compact ? selected?.name : undefined}
        title={selected?.name}
      >
        {children}
        {/* The chevron is what tells you the name is a control. With no name
            there is nothing for it to qualify, and at 32px it only crowds the
            logo — the rail's affordance is the hover state and the tooltip. */}
        {!compact && (
          <div className="flex w-5 shrink-0 items-center justify-center">
            <div className="flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold"
              >
                <F0Icon icon={ChevronDown} size="xs" />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </F0Select>
  )
}

/** The company's mark on its own — shared by the label and the rail. */
const CompanyAvatar = ({
  company,
  withNotification = false,
  size = "sm",
}: {
  company: CompanySelectorProps["companies"][number]
  withNotification?: boolean
  size?: "sm" | "md"
}) => (
  <F0AvatarCompany
    name={company?.name?.[0]}
    src={company?.logo}
    size={size}
    badge={withNotification ? { icon: Circle, type: "highlight" } : undefined}
  />
)

const SelectedCompanyLabel = ({
  company,
  withNotification = false,
}: {
  company: CompanySelectorProps["companies"][number]
  withNotification?: boolean
}) => {
  return (
    <div
      className={cn(
        "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"
      )}
    >
      <CompanyAvatar company={company} withNotification={withNotification} />
      <OneEllipsis tag="span">{company?.name ?? ""}</OneEllipsis>
    </div>
  )
}
