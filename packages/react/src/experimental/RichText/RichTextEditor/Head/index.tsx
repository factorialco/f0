import { F0Button } from "@/components/F0Button"
import { Maximize, Minimize } from "@/icons/app"

interface HeadProps {
  isFullscreen: boolean
  handleToggleFullscreen: () => void
  disableAllButtons: boolean
  title: string
}

const Head = ({
  isFullscreen,
  handleToggleFullscreen,
  disableAllButtons,
  title,
}: HeadProps) => {
  return (
    <>
      <div className="absolute right-3 top-3 z-50">
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
      {isFullscreen && (
        <div className="pl-3 pr-10 pt-3">
          <h1 className="font-bold truncate text-ellipsis text-lg">{title}</h1>
        </div>
      )}
    </>
  )
}

export { Head }
