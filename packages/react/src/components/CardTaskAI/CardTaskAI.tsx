import { forwardRef } from "react"
import { withDataTestId } from "@/lib/data-testid"
import type { CardTaskAIProps } from "./types"

const CardTaskAIBase = forwardRef<HTMLDivElement, CardTaskAIProps>(
  (
    {
      icon,
      title,
      description,
      tasks,
      badge,
      onClick,
      className = "",
      "data-testid": testId,
    },
    ref
  ) => {
    const statusConfig: Record<string, { bgColor: string; textColor: string }> =
      {
        completed: { bgColor: "bg-green-50", textColor: "text-green-700" },
        "in-progress": { bgColor: "bg-blue-50", textColor: "text-blue-700" },
        pending: { bgColor: "bg-gray-50", textColor: "text-gray-700" },
        error: { bgColor: "bg-red-50", textColor: "text-red-700" },
      }

    const badgeVariantConfig: Record<string, { bgColor: string; textColor: string }> =
      {
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

    const handleClick = () => {
      if (onClick) onClick()
    }

    const badgeVariant = badge?.variant || "default"
    const badgeStyle = badgeVariantConfig[badgeVariant]

    return (
      <div
        ref={ref}
        data-testid={testId || "card-task-ai"}
        onClick={handleClick}
        className={`
          relative rounded-[12px] border border-[rgba(5,38,87,0.06)] 
          bg-white transition-all duration-200 
          ${onClick ? "cursor-pointer hover:shadow-md hover:border-[rgba(5,38,87,0.12)]" : ""}
          ${className}
        `}
      >
        <div className="flex gap-[16px] p-[16px]">
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

            {/* Tasks List */}
            {tasks && tasks.length > 0 && (
              <div className="flex flex-col gap-[8px]">
                {tasks.map((task) => {
                  const taskStatus = task.status || "pending"
                  const taskStyle = statusConfig[taskStatus]

                  return (
                    <div
                      key={task.id}
                      className={`
                        flex items-center gap-[8px] rounded-[6px] px-[8px] py-[6px]
                        ${taskStyle.bgColor}
                      `}
                    >
                      <div className="flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center">
                        {taskStatus === "completed" && (
                          <svg
                            className="h-4 w-4 text-green-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {taskStatus === "in-progress" && (
                          <div className="h-3 w-3 rounded-full border-2 border-blue-700 border-t-transparent animate-spin" />
                        )}
                        {taskStatus === "error" && (
                          <svg
                            className="h-4 w-4 text-red-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`
                          flex-1 text-[13px] font-medium leading-[20px]
                          ${taskStyle.textColor}
                        `}
                      >
                        {task.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)

CardTaskAIBase.displayName = "CardTaskAI"

export const CardTaskAI = withDataTestId(CardTaskAIBase)
