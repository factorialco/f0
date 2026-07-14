import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgLaptop = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.076 3.6A3.324 3.324 0 0 1 20.4 6.923v7.902c.595.321 1 .951 1 1.675a3.9 3.9 0 0 1-3.9 3.9h-11a3.9 3.9 0 0 1-3.9-3.9c0-.724.404-1.354 1-1.675V6.923A3.324 3.324 0 0 1 6.923 3.6zM4.461 16.407a.1.1 0 0 0-.061.093c0 1.16.94 2.1 2.1 2.1h11a2.1 2.1 0 0 0 2.1-2.1.1.1 0 0 0-.1-.1h-4c-.479 0-.671.129-1 .348-.42.28-.98.652-2 .652h-1c-1.02 0-1.58-.372-2-.652-.33-.22-.522-.348-1-.348h-4zM6.923 5.4c-.84 0-1.523.682-1.523 1.523V14.6h3.1c1.019 0 1.579.371 1.998.65.33.22.522.35 1.001.35H12.5c.479 0 .67-.13 1-.35.42-.279.98-.65 2-.65h3.1V6.923c0-.84-.683-1.523-1.524-1.523z"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgLaptop)
export default ForwardRef
