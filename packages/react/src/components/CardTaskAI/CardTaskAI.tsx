import { forwardRef, useState } from "react"
import { withDataTestId } from "@/lib/data-testid"
import { F0Card } from "@/components/F0Card"
import { F0Icon } from "@/components/F0Icon"
import { F0Button } from "@/components/F0Button"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagList } from "@/components/tags/F0TagList"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { List, Ai, Folders, Paperclip, Split, Pencil } from "@/icons/app"
import type { CardTaskAIProps, TaskOption } from "./types"

/**
 * Runtime validation for CardTaskAI edge cases
 * Logs warnings to console but doesn't crash the component
 */
const validateCardTaskAI = (props: CardTaskAIProps) => {
  const { title, icon, options } = props

  // Check required fields
  if (!title || (typeof title === "string" && title.trim() === "")) {
    console.warn(
      "[CardTaskAI] Title is empty or missing. Component expects a non-empty title."
    )
  }

  if (!icon) {
    console.error(
      "[CardTaskAI] Icon is required but was not provided. Rendering empty icon space."
    )
  }

  if (!options || options.length === 0) {
    console.warn(
      "[CardTaskAI] No options provided. Card will appear empty. Consider adding at least an assignee."
    )
  } else {
    // Check for automation exclusivity
    const hasAutomation = options.some((opt) => opt.type === "one-automation")
    const hasNonAssigneeNonAutomation = options.some(
      (opt) => opt.type !== "one-automation" && opt.type !== "assignee"
    )
    if (hasAutomation && hasNonAssigneeNonAutomation) {
      console.error(
        "[CardTaskAI] 'one-automation' cannot coexist with single-task, with-folder, document-upload or condition options. Only assignee is allowed alongside automation."
      )
    }

    // Check for assignee
    const hasAssignee = options.some((opt) => opt.type === "assignee")
    if (!hasAssignee) {
      console.warn(
        "[CardTaskAI] No assignee found in options. Recommend adding at least one assignee option."
      )
    }

    // Check for duplicate IDs
    const ids = options.map((opt) => opt.id)
    const uniqueIds = new Set(ids)
    if (ids.length !== uniqueIds.size) {
      console.error(
        "[CardTaskAI] Duplicate option IDs detected. Each option must have a unique id."
      )
    }

    // Check for invalid option types
    const validTypes = new Set([
      "single-task",
      "one-automation",
      "with-folder",
      "document-upload",
      "tags",
      "assignee",
    ])
    options.forEach((opt) => {
      if (!validTypes.has(opt.type as string)) {
        console.error(
          `[CardTaskAI] Invalid option type: "${opt.type}". Use one of: single-task, one-automation, with-folder, document-upload, tags, assignee`
        )
      }
    })

    // Check for missing assignee data
    options.forEach((opt) => {
      if (opt.type === "assignee") {
        const assigneeOpt = opt as Extract<TaskOption, { type: "assignee" }>
        if (!assigneeOpt.firstName && !assigneeOpt.lastName) {
          console.error(
            `[CardTaskAI] Assignee option (id: ${opt.id}) missing both firstName and lastName. Skeleton will be shown.`
          )
        }
      }
    })

    // Check for missing required labels
    options.forEach((opt) => {
      if (
        [
          "single-task",
          "one-automation",
          "with-folder",
          "document-upload",
        ].includes(opt.type)
      ) {
        const optWithLabel = opt as Extract<
          TaskOption,
          {
            type:
              | "single-task"
              | "one-automation"
              | "with-folder"
              | "document-upload"
          }
        >
        if (
          !optWithLabel.label ||
          (typeof optWithLabel.label === "string" &&
            optWithLabel.label.trim() === "")
        ) {
          console.warn(
            `[CardTaskAI] Option (id: ${opt.id}, type: ${opt.type}) has missing or empty label. Skeleton will be shown.`
          )
        }
      }
    })
  }
}

const CardTaskAIBase = forwardRef<HTMLDivElement, CardTaskAIProps>(
  (
    {
      icon,
      title,
      description,
      options,
      badge,
      onClick,
      actionLabel,
      onAction,
      className = "",
      "data-testid": testId,
    },
    ref
  ) => {
    // Validate props in development
    if (process.env.NODE_ENV === "development") {
      validateCardTaskAI({
        icon,
        title,
        description,
        options,
        badge,
        onClick,
        className,
        "data-testid": testId,
      })
    }
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
        case "single-task":
          return (
            <div key={option.id} className="flex items-start gap-[8px]">
              <div className="mt-[2px] flex-shrink-0">
                {option.icon ? (
                  <div className="flex h-[20px] w-[20px] items-center justify-center text-gray-600">
                    {option.icon}
                  </div>
                ) : (
                  <F0Icon icon={List} size="sm" />
                )}
              </div>
              <p className="text-[14px] font-normal leading-[24px] text-[rgba(1,22,55,0.61)]">
                {option.label}
              </p>
            </div>
          )

        case "one-automation":
          return (
            <div key={option.id} className="flex items-start gap-[8px]">
              <div className="mt-[2px] flex-shrink-0">
                <F0Icon icon={Ai} size="sm" />
              </div>
              <p className="text-[14px] font-normal leading-[24px] text-[rgba(1,22,55,0.61)]">
                {option.label || "Automatically send by ONE"}
              </p>
            </div>
          )

        case "with-folder":
          return (
            <div
              key={option.id}
              className={`flex items-start gap-[8px] ${option.onClick ? "cursor-pointer" : ""}`}
              onClick={option.onClick}
              role={option.onClick ? "button" : undefined}
              tabIndex={option.onClick ? 0 : undefined}
            >
              <div className="mt-[2px] flex-shrink-0">
                {option.icon ? (
                  <div className="flex h-[20px] w-[20px] items-center justify-center">
                    {option.icon}
                  </div>
                ) : (
                  <F0Icon icon={Folders} size="sm" />
                )}
              </div>
              <p className="text-[14px] font-normal leading-[24px] text-[rgba(1,22,55,0.61)]">
                {option.label}
              </p>
            </div>
          )

        case "document-upload":
          return (
            <div
              key={option.id}
              className={`flex items-start gap-[8px] ${option.onClick ? "cursor-pointer" : ""}`}
              onClick={option.onClick}
              role={option.onClick ? "button" : undefined}
              tabIndex={option.onClick ? 0 : undefined}
            >
              <div className="mt-[2px] flex-shrink-0">
                {option.icon ? (
                  <div className="flex h-[20px] w-[20px] items-center justify-center">
                    {option.icon}
                  </div>
                ) : (
                  <F0Icon icon={Paperclip} size="sm" />
                )}
              </div>
              <div className="flex items-center gap-[4px]">
                {option.fileType && (
                  <span className="inline-flex items-center rounded px-[6px] py-[2px] text-[11px] font-semibold uppercase tracking-wider text-red-600">
                    {option.fileType}
                  </span>
                )}
                <p className="text-[14px] font-normal leading-[24px] text-[rgba(1,22,55,0.61)]">
                  {option.label}
                </p>
              </div>
            </div>
          )

        case "condition": {
          const INLINE_LIMIT = 3
          const isInlineMode = option.conditions.length <= INLINE_LIMIT
          return (
            <div key={option.id} className="flex items-start gap-[8px]">
              <div className="mt-[2px] flex-shrink-0">
                <F0Icon icon={Split} size="sm" />
              </div>
              {isInlineMode ? (
                <div className="flex flex-wrap items-center gap-[4px]">
                  {option.conditions.map((cond) => (
                    <F0TagRaw key={cond.id} text={cond.label} />
                  ))}
                </div>
              ) : (
                <div className="w-full">
                  <F0TagList
                    type="raw"
                    tags={option.conditions.map((cond) => ({
                      text: cond.label,
                    }))}
                    max={4}
                  />
                </div>
              )}
            </div>
          )
        }

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
              <span className="text-[14px] font-normal leading-[24px] text-[rgba(1,22,55,0.61)]">
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

    const [isHovered, setIsHovered] = useState(false)

    return (
      <div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`transition-all duration-200 ${className}`}
        style={{
          borderRadius: isHovered ? "12px" : "16px",
          cursor: onClick ? "pointer" : "auto",
        }}
      >
        <F0Card
          data-testid={testId || "card-task-ai"}
          onClick={handleClick}
          className={`
            !p-3 !pt-[10px] transition-all duration-200 
          `}
          style={{
            backgroundColor: isHovered ? "rgba(5, 31, 81, 0.04)" : undefined,
            borderColor: isHovered ? "rgba(5, 38, 87, 0.06)" : undefined,
            borderWidth: isHovered ? "1px" : undefined,
            borderStyle: isHovered ? "solid" : undefined,
          }}
        >
          <div className="flex items-start gap-[4px]">
            {/* Icon Section */}
            <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center">
              {icon}
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col gap-0">
              {/* Header with Title and Badge/Action */}
              <div className="flex items-start justify-between gap-[8px] h-[32px] pl-[4px]">
                <div className="flex-1 min-w-0">
                  <h3 className="m-0 mt-[4px] truncate text-lg font-semibold leading-[24px] text-[#0d1625]">
                    {title}
                  </h3>
                  {description && (
                    <p className="mt-[4px] truncate text-sm leading-[24px] text-[rgba(1,22,55,0.61)]">
                      {description}
                    </p>
                  )}
                </div>

                {/* Badge (visible by default) */}
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

                {/* Action Button (appears on hover when onAction is provided) */}
                {actionLabel && onAction && !badge && isHovered && (
                  <div className="flex-shrink-0 pl-[8px]">
                    <F0Button
                      variant="outline"
                      size="xs"
                      icon={Pencil}
                      label={actionLabel}
                      onClick={(e) => {
                        e.stopPropagation()
                        onAction()
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Options List */}
              {options && options.length > 0 && (
                <div className="flex flex-col gap-[2px]">
                  {options.map((option) => renderOption(option))}
                </div>
              )}
            </div>
          </div>
        </F0Card>
      </div>
    )
  }
)

CardTaskAIBase.displayName = "CardTaskAI"

export const CardTaskAI = withDataTestId(CardTaskAIBase)
