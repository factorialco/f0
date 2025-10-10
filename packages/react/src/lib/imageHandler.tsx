import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  ReactNode,
  useContext,
} from "react"

export type ImageContextValue = {
  src?: (props: ImageProps) => SrcProps
}

const ImageContext = createContext<ImageContextValue | undefined>(undefined)

export const ImageProvider: React.FC<
  {
    children: ReactNode
  } & ImageContextValue
> = ({ children, ...value }) => {
  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}

export const useImageContext = () => {
  const context = useContext(ImageContext)
  return {
    ...context,
  }
}

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export type SrcProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes"
>

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    const { src } = useImageContext()

    if (!src) return <img ref={ref} {...props} />
    const extraProps = src(props)
    return <img ref={ref} {...props} {...extraProps} />
  }
)
