import { ButtonInternal } from "@/components/F0Button/internal"
import { ButtonVariant } from "@/components/F0Button/types"
import { IconType } from "@/components/F0Icon/F0Icon"
import { Spinner } from "@/experimental/Information/Spinner"

export type ActionProps = {
  buttonType: "gradient" | "internal"
  label: string
  onClick: () => void
  isLoading: boolean
  buttonVariant?: ButtonVariant
  icon?: IconType
}

type CustomButtonProps = {
  action: ActionProps
  onClose: () => void
}

export const CustomButton = ({ action, onClose }: CustomButtonProps) => {
  const handleClick = () => {
    action.onClick()
    onClose()
  }

  switch (action.buttonType) {
    case "gradient":
      return (
        <button
          style={{
            color: "white",
            background:
              "linear-gradient(270deg, rgba(161, 173, 229, 0.7) 0%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 100%)",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1"
          }}
          onClick={handleClick}
        >
          {action.isLoading ? <Spinner size="small" /> : action.label}
        </button>
      )

    case "internal":
      return (
        <ButtonInternal
          label={action.label || ""}
          onClick={handleClick}
          variant={action.buttonVariant}
          icon={action.icon}
        />
      )
  }
}
