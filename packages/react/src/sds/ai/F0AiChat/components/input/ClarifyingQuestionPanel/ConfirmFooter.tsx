import { F0Button } from "@/components/F0Button"

interface ConfirmFooterProps {
  canProceed: boolean
  label: string
  onConfirm: () => void
  isFinalStep: boolean
}

export const ConfirmFooter = ({
  canProceed,
  label,
  onConfirm,
  isFinalStep,
}: ConfirmFooterProps) => {
  return (
    <div className="flex items-center justify-end p-4">
      <F0Button
        disabled={!canProceed}
        variant={isFinalStep ? "default" : "outline"}
        label={label}
        onClick={onConfirm}
      />
    </div>
  )
}
