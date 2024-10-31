import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={1.3} d="m5.55 14.121.714-4A5 5 0 0 1 11.186 6h1.628a5 5 0 0 1 4.922 4.121l.714 4A5 5 0 0 1 13.528 20h-3.056a5 5 0 0 1-4.922-5.879ZM10.326 2.5h3.348a1 1 0 0 1 .962 1.275L14 6h-4l-.636-2.225a1 1 0 0 1 .962-1.275Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="M14 10h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10M12 16v1M12 9v1" /></svg>;
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;