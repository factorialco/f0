import { OneEmptyState } from "@factorialco/f0-react"
import { useNavigate } from "react-router-dom"

export function NotFound({ message }: { message?: string }) {
  const navigate = useNavigate()
  return (
    <div className="flex h-full items-center justify-center p-6">
      <OneEmptyState
        emoji="🧭"
        title="Prototype not found"
        description={
          message ??
          "The prototype you're looking for doesn't exist or hasn't been created yet."
        }
        actions={[
          {
            label: "Back to catalog",
            onClick: () => navigate("/"),
          },
        ]}
      />
    </div>
  )
}
