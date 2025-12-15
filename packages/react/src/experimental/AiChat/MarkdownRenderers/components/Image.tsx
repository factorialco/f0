import { F0Button } from "@/components/F0Button"
import DownloadIcon from "@/icons/app/Download"
import { cn } from "@/lib/utils"

export function Image({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const handleDownload = () => {
    if (src) {
      const link = document.createElement("a")
      link.href = src
      link.download = alt || "image"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="relative w-fit">
      <img
        {...props}
        src={src}
        alt={alt}
        className={cn("max-w-full rounded-md", props.className)}
      />
      <div className="absolute right-2 top-2 rounded bg-f1-background-inverse-secondary">
        <F0Button
          variant="neutral"
          label="Download"
          hideLabel
          icon={DownloadIcon}
          onClick={handleDownload}
        />
      </div>
    </div>
  )
}
