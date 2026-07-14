import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgPeople = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9.497 14.779c2.383 0 4.934 1.263 6.438 2.944a.9.9 0 0 1-1.341 1.2c-1.195-1.333-3.27-2.344-5.097-2.344S5.595 17.59 4.4 18.924a.9.9 0 0 1-1.34-1.201c1.505-1.68 4.054-2.944 6.437-2.944M9.499 4.852a4.648 4.648 0 1 1 0 9.296 4.648 4.648 0 0 1 0-9.296m0 1.8a2.848 2.848 0 1 0 0 5.697 2.848 2.848 0 0 0 0-5.697M15.5 13.85c2.063 0 4.213 1.248 5.462 2.852a.9.9 0 0 1-1.42 1.107c-.975-1.252-2.635-2.159-4.041-2.159a.9.9 0 1 1 0-1.8M15.5 5.824a3.677 3.677 0 0 1 0 7.351.9.9 0 0 1 0-1.8 1.876 1.876 0 1 0 0-3.75.9.9 0 0 1 0-1.8"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgPeople)
export default ForwardRef
