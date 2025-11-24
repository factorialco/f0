import { type FC } from "react"

export interface TestWebComponentProps {
  message?: string
}

/**
 * Test component for web platform
 * This is a dummy component to verify the build process works correctly
 */
export const TestWebComponent: FC<TestWebComponentProps> = ({
  message = "Hello from Web Component!",
}) => {
  return (
    <div className="bg-blue-100 rounded-lg p-4">
      <h2 className="text-lg font-semibold">Web Component</h2>
      <p>{message}</p>
    </div>
  )
}
