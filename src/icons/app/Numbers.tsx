import { Ref, forwardRef } from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"
const SvgNumbers = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7 7.6a.897.897 0 0 1 .9.9v7a.9.9 0 0 1-1.8 0v-4.35c-.338.155-.71.25-1.1.25a.9.9 0 0 1 0-1.8c.207 0 .49-.113.738-.361.243-.243.356-.518.361-.723V8.5a.9.9 0 0 1 .9-.9zm10 0a2.896 2.896 0 0 1 2.893 2.807q.006.045.006.093c0 1.504-.117 2.946-.657 4.027-.283.566-.69 1.052-1.263 1.389-.568.334-1.235.484-1.98.484a.9.9 0 0 1 0-1.8c.505 0 .839-.101 1.068-.236.224-.131.41-.332.565-.642q.096-.196.17-.438A3 3 0 0 1 17 13.4a2.9 2.9 0 1 1 0-5.8m-4.501 4a.9.9 0 1 1 0 1.8h-2.5a.9.9 0 0 1 0-1.8zM17 9.4a1.1 1.1 0 1 0 0 2.202A1.1 1.1 0 0 0 17 9.4"
    />
  </Svg>
)
const ForwardRef = forwardRef(SvgNumbers)
export default ForwardRef
