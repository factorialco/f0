import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgStar = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11.467 5.642c.171-.364.257-.546.373-.604a.36.36 0 0 1 .32 0c.116.058.202.24.373.604l1.624 3.45c.05.108.075.161.112.203a.4.4 0 0 0 .116.088c.049.024.106.033.219.05l3.632.557c.383.059.574.088.662.186a.4.4 0 0 1 .099.319c-.017.134-.155.275-.432.558l-2.628 2.684c-.082.084-.123.126-.15.176a.4.4 0 0 0-.043.142c-.007.057.003.116.022.234l.62 3.792c.065.4.098.6.037.718a.37.37 0 0 1-.259.197c-.127.025-.298-.07-.64-.258l-3.247-1.792a.8.8 0 0 0-.205-.095.4.4 0 0 0-.143 0c-.054.012-.104.04-.206.095l-3.247 1.791c-.342.19-.513.284-.64.26a.37.37 0 0 1-.259-.198c-.061-.119-.028-.319.037-.718l.62-3.792a1 1 0 0 0 .022-.234.4.4 0 0 0-.044-.142c-.026-.05-.067-.092-.15-.176l-2.627-2.684c-.276-.283-.415-.424-.432-.558a.4.4 0 0 1 .099-.319c.088-.098.28-.127.662-.186l3.633-.557a.8.8 0 0 0 .218-.05.4.4 0 0 0 .116-.088.9.9 0 0 0 .112-.203z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
