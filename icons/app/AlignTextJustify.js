import { forwardRef } from "react";
const SvgAlignTextJustify = (props, ref) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 8H19" vectorEffect="non-scaling-stroke"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 12H19" vectorEffect="non-scaling-stroke"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 16H19" vectorEffect="non-scaling-stroke"/>
  </svg>);
const ForwardRef = forwardRef(SvgAlignTextJustify);
export default ForwardRef;
