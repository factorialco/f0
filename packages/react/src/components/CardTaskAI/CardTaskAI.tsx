import { forwardRef } from "react"
import { withDataTestId } from "@/lib/data-testid"
import { F0Card } from "@/components/F0Card"
import { F0Icon } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { List, Ai, Folders, Paperclip, Split } from "@/icons/app"
import type { CardTaskAIProps, TaskOption } from "./types"

const CardTaskAIBase = forwardRef<HTMLDivElement, CardTaskAIProps>(
  (
    {
      icon,
      title,
      description,
      options,
      badge,
      onClick,
      className = "",
      "data-testid": testId,
    },
    ref
  ) => {
    const badgeVariantConfig: Record<
      string,
      { bgColor: string; textColor: string }
    > = {
      default: {
        bgColor: "bg-gray-100",
        textColor: "text-gray-700",
      },
      primary: {
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
      },
      success: {
        bgColor: "bg-green-100",
        textColor: "text-green-700",
      },
      warning: {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-700",
      },
      error: {
        bgColor: "bg-red-100",
        textColor: "text-red-700",
      },
    }

    const renderOption = (option: TaskOption) => {
      switch (option.type) {
        case "text":
          return (
            <div key={option.id} className="flex items-center gap-[8px]">
              {option.icon ? (
                <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center text-gray-600">
                  {option.icon}
                </div>
              ) : (
                <F0Icon icon={List} size="sm" />
              )}
              <p className="text-[14px] font-normal leading-[20px] text-[rgba(1,22,55,0.61)]">
                {option.label}
              </p>
            </div>
          )

        case "automation":
          return (
            <div key={option.id} className="flex items-center gap-[8px]">
              <F0Icon icon={Ai} size="sm" />
              <p className="text-[14px] font-normal leading-[20px] text-[rgba(1,22,55,0.61)]">
                {option.label || "Automatically send by ONE"}
              </p>
            </div>
          )

        case "form":
          return (
            <div
              key={option.id}
              className={`flex items-center gap-[8px] ${option.onClick ? "cursor-pointer" : ""}`}
              onClick={option.onClick}
              role={option.onClick ? "button" : undefined}
              tabIndex={option.onClick ? 0 : undefined}
            >
              {option.icon ? (
                <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center">
                  {option.icon}
                </div>
              ) : (
                <F0Icon icon={Folders} size="sm" />
              )}
              <p className="text-[14px] font-normal leading-[20px] text-[rgba(1,22,55,0.61)]">
                {option.label}
              </p>
            </div>
          )

        case "document":
          return (
            <div
              key={option.id}
              className={`flex items-center gap-[8px] ${option.onClick ? "cursor-pointer" : ""}`}
              onClick={option.onClick}
              role={option.onClick ? "button" : undefined}
              tabIndex={option.onClick ? 0 : undefined}
            >
              {option.icon ? (
                <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center">
                  {option.icon}
                </div>
              ) : (
                <F0Icon icon={Paperclip} size="sm" />
              )}
              <div className="flex items-center gap-[4px]">
                {option.fileType && (
                  <span className="inline-flex items-center rounded px-[6px] py-[2px] text-[11px] font-semibold uppercase tracking-wider text-red-600">
                    {option.fileType}
                  </span>
                )}
                <p className="text-[14px] font-normal leading-[20px] text-[rgba(1,22,55,0.61)]">
                  {option.label}
                </p>
              </div>
            </div>
          )

        case "tags":
          return (
            <div
              key={option.id}
              className="flex flex-wrap items-center gap-[8px]"
            >
              {option.icon ? (
                <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center">
                  {option.icon}
                </div>
              ) : (
                <F0Icon icon={Split} size="sm" />
              )}
              <div className="flex flex-wrap items-center gap-[6px]">
                {option.tags.map((tag) => (
                  <F0TagRaw key={tag.id} text={tag.label} />
                ))}
              </div>
            </div>
          )

        case "assignee":
          return (
            <div key={option.id} className="flex items-center gap-[8px]">
              <F0AvatarPerson
                firstName={option.firstName}
                lastName={option.lastName}
                src={option.src}
                deactivated={option.deactivated}
                size="xs"
              />
              <span className="text-[14px] font-normal leading-[20px] text-[rgba(1,22,55,0.61)]">
                {option.firstName} {option.lastName}
              </span>
            </div>
          )

        default:
          return null
      }
    }

    const handleClick = () => {
      if (onClick) onClick()
    }

    const badgeVariant = badge?.variant || "default"
    const badgeStyle = badgeVariantConfig[badgeVariant]

    return (
      <F0Card
        ref={ref}
        data-testid={testId || "card-task-ai"}
        onClick={handleClick}
        className={`
          transition-all duration-200 
          ${onClick ? "cursor-pointer hover:shadow-md" : ""}
          ${className}
        `}
      >
        <div className="flex gap-[8px] pt-[16px] pb-[12px] px-[16px]">
          {/* Icon Section */}
          <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center">
            {icon}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col gap-[8px]">
            {/* Header with Title and Badge */}
            <div className="flex items-start justify-between gap-[8px]">
              <div className="flex-1">
                <h3 className="text-lg font-semibold leading-[24px] text-[#0d1625]">
                  {title}
                </h3>
                {description && (
                  <p className="mt-[4px] text-sm leading-[20px] text-[rgba(1,22,55,0.61)]">
                    {description}
                  </p>
                )}
              </div>

              {/* Badge */}
              {badge && (
                <div
                  className={`
                    inline-flex flex-shrink-0 items-center gap-[4px] 
                    rounded-[10px] px-[8px] py-[4px]
                    ${badgeStyle.bgColor}
                  `}
                >
                  {badge.avatar && (
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      {badge.avatar}
                    </div>
                  )}
                  <span
                    className={`
                      whitespace-nowrap text-[12px] font-semibold leading-[16px]
                      ${badgeStyle.textColor}
                    `}
                  >
                    {badge.label}
                  </span>
                </div>
              )}
            </div>

            {/* Options List */}
            {options && options.length > 0 && (
              <div className="flex flex-col gap-[8px]">
                {options.map((option) => renderOption(option))}
              </div>
            )}
          </div>
        </div>
      </F0Card>
    )
  }
)

CardTaskAIBase.displayName = "CardTaskAI"

export const CardTaskAI = withDataTestId(CardTaskAIBase)
