import { CompanySelector, type CompanySelectorProps } from "../CompanySelector"
import { SidebarIcon, type SidebarIconProps } from "../Icon"

export type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps

export function SidebarHeader({
  companies,
  selected,
  onChange,
  withNotification = false,
  additionalOptions,
}: SidebarHeaderProps) {
  return (
    <div className="flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3">
      <CompanySelector
        companies={companies}
        selected={selected}
        onChange={onChange}
        withNotification={withNotification}
        additionalOptions={additionalOptions}
      />
      <SidebarIcon />
    </div>
  )
}
