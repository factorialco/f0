import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 10H19" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;