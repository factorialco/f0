import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPalmTree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M8 19H16M13.5 13L14 19M10.5 13L10 19"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPalmTree)
export default ForwardRef
