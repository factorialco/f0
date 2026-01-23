import { ErrorMessageProps } from "@copilotkit/react-ui"

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="relative isolate flex w-full flex-col items-start justify-center last:mb-8">
      {error.message}
    </div>
  )
}
