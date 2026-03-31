import { cn } from "@/lib/utils"

interface PongBallProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function PongBall({ size = 40, className, style }: PongBallProps) {
  return (
    <div
      className={cn(className, "rounded-full")}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #E8845E, #B89BD6)",
        ...style,
      }}
    />
  )
}
