import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertCircleLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="M12 12V9M12 15.1V15" /></svg>;
const ForwardRef = forwardRef(SvgAlertCircleLine);
export default ForwardRef;