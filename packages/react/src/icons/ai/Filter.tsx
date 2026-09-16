import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g transform="translate(-3.2 -1) scale(1.15)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.6 5H6.17422C5.31987 5 4.85896 6.00212 5.41496 6.65079L9.75926 11.7191C9.91461 11.9004 10 12.1312 10 12.3699V18C10 18.824 10.9408 19.2944 11.6 18.8L13.6 17.3C13.8518 17.1111 14 16.8148 14 16.5V12.3699C14 12.1312 14.0854 11.9004 14.2407 11.7191L17.1 8.38"
      />
    </g>
    <g transform="translate(-0.3 -1.6) scale(1.1)">
      <path
        fill="currentColor"
        d="M16.5312 3.267C16.6925 2.83206 17.3075 2.83206 17.4688 3.267L18.001 4.7045C18.0517 4.84107 18.1593 4.94883 18.2959 4.99942L19.7324 5.53067C20.1677 5.69175 20.1677 6.30807 19.7324 6.46915L18.2959 7.0004C18.159 7.05104 18.0516 7.15944 18.001 7.2963L17.4688 8.73282C17.3076 9.16796 16.6924 9.16796 16.5312 8.73282L15.999 7.2963C15.9484 7.15944 15.841 7.05104 15.7041 7.0004L14.2676 6.46915C13.8323 6.30807 13.8323 5.69175 14.2676 5.53067L15.7041 4.99942C15.8407 4.94883 15.9483 4.84107 15.999 4.7045L16.5312 3.267Z"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgFilter)
export default ForwardRef
