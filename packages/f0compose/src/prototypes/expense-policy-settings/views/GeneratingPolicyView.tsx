import { F0Text } from "@factorialco/f0-react"

/**
 * "Generating your policy…" transition screen.
 *
 * Shown between the interview and the co-creation editor: the canvas
 * paints a quiet skeleton of the policy page (left-nav rail + a 2×2
 * card grid) with a centered floating progress pill, while the starter
 * policy is assembled from the interview answers.
 *
 * Reused (with `showProgress={false}`) as the quiet backdrop behind the
 * fullscreen chat during the interview phase, so any transparent edge
 * of the chat reveals an intentional skeleton rather than a blank page.
 *
 * Scaffold only — native divs + inline styles for the skeleton blocks
 * (F0Box has no sizing/animation props); copy is an F0 primitive.
 */
function Sk(props: {
  w?: number | string
  h: number
  r?: number
  style?: React.CSSProperties
}): React.ReactElement {
  const { w = "100%", h, r = 8, style } = props
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        background: "#e5e7eb",
        animation: "epsPulse 1.5s ease-in-out infinite",
        ...style,
      }}
    />
  )
}

function SkeletonCard(): React.ReactElement {
  return (
    <div
      style={{
        border: "1px solid #eceef1",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        background: "#fff",
        minHeight: 150,
      }}
    >
      <Sk w={40} h={40} r={10} />
      <Sk w="70%" h={12} />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sk w={16} h={16} r={8} />
        <Sk w="45%" h={10} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Sk w={16} h={16} r={8} />
        <Sk w="35%" h={10} />
      </div>
    </div>
  )
}

export function GeneratingPolicyView(props: {
  showProgress?: boolean
  message?: string
}): React.ReactElement {
  const {
    showProgress = true,
    message = "Got it. Setting up your Expenses now…",
  } = props

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        gap: 32,
        flex: 1,
        minHeight: "70vh",
        padding: "8px 4px",
      }}
    >
      <style>
        {`@keyframes epsPulse{0%,100%{opacity:1}50%{opacity:.45}}
          @keyframes epsBar{0%{left:-40%}100%{left:100%}}`}
      </style>

      {/* Left-nav rail skeleton */}
      <div
        style={{
          width: 230,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          flexShrink: 0,
        }}
      >
        <Sk w="55%" h={12} style={{ marginBottom: 4 }} />
        <Sk h={34} r={8} style={{ background: "#dfe3e8" }} />
        <Sk h={28} r={8} />
        <Sk h={28} r={8} />
        <div style={{ height: 16 }} />
        <Sk w="45%" h={12} style={{ marginBottom: 4 }} />
        <Sk h={28} r={8} />
        <Sk h={28} r={8} />
        <Sk h={28} r={8} />
        <Sk h={28} r={8} />
        <Sk h={28} r={8} />
      </div>

      {/* Main canvas skeleton */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          minWidth: 0,
        }}
      >
        <Sk w={140} h={16} />
        <Sk h={44} r={10} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      {/* Centered floating progress pill */}
      {showProgress && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 440,
              maxWidth: "80%",
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 10px 40px rgba(15,23,42,0.16)",
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Indeterminate gradient progress track */}
            <div
              style={{
                position: "relative",
                height: 6,
                borderRadius: 999,
                background: "#f1f3f5",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "40%",
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, #ff7a59 0%, #ff4d7d 100%)",
                  animation: "epsBar 1.3s ease-in-out infinite",
                }}
              />
            </div>
            <F0Text variant="body" content={message} />
          </div>
        </div>
      )}
    </div>
  )
}
