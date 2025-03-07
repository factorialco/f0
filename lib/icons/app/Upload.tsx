import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14V5M12 5L9 8M12 5L15 8" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;