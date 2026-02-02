import { F0Button } from "@/components/F0Button"
import { Maximize, Minimize } from "@/icons/app"

interface HeadProps {
  fullScreenMode: boolean
  isFullscreen: boolean
  handleToggleFullscreen: () => void
  disableAllButtons: boolean
  title: string
}

const Head = ({
  fullScreenMode,
  isFullscreen,
  handleToggleFullscreen,
  disableAllButtons,
  title,
}: HeadProps) => {
  return (
    <>
      {fullScreenMode && (
        <div className="absolute right-3 top-3 z-[1300]">
          <F0Button
            onClick={(e) => {
              e?.preventDefault()
              handleToggleFullscreen()
            }}
            label="Fullscreen"
            aria-label="Toggle fullscreen mode"
            variant="outline"
            hideLabel
            size="sm"
            icon={isFullscreen ? Minimize : Maximize}
            disabled={disableAllButtons}
          />
        </div>
      )}
      {isFullscreen && (
        <div className="flex w-full items-start justify-center px-6 pt-24">
          <h1 className="font-bold w-full max-w-[824px] text-3xl">{title}</h1>
        </div>
      )}
    </>
  )
}

export { Head }
