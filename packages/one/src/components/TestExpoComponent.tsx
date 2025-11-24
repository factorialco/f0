import { type FC } from "react"

export interface TestExpoComponentProps {
  message?: string
}

/**
 * Test component for Expo/React Native platform
 * This is a dummy component to verify the build process works correctly
 *
 * Note: This is a simplified version for build verification.
 */
export const TestExpoComponent: FC<TestExpoComponentProps> = ({
  message = "Hello from Expo Component!",
}) => {
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: "#e0f2fe",
        borderRadius: 8,
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
        Expo Component
      </h2>
      <p style={{ fontSize: 14 }}>{message}</p>
    </div>
  )
}
