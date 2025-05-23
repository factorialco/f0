import { forwardRef } from "react";
const SvgHub = (props, ref) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <g fill="currentColor" filter="url(#a)">
      <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z" vectorEffect="non-scaling-stroke"/>
      <path d="M4.5 15C4.5 14.1716 5.17157 13.5 6 13.5H9C9.82843 13.5 10.5 14.1716 10.5 15V18C10.5 18.8284 9.82843 19.5 9 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V15Z" vectorEffect="non-scaling-stroke"/>
      <path d="M13.5 6C13.5 5.17157 14.1716 4.5 15 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V9C19.5 9.82843 18.8284 10.5 18 10.5H15C14.1716 10.5 13.5 9.82843 13.5 9V6Z" vectorEffect="non-scaling-stroke"/>
      <path d="M13.5 15C13.5 14.1716 14.1716 13.5 15 13.5H18C18.8284 13.5 19.5 14.1716 19.5 15V18C19.5 18.8284 18.8284 19.5 18 19.5H15C14.1716 19.5 13.5 18.8284 13.5 18V15Z" vectorEffect="non-scaling-stroke"/>
    </g>
    <defs>
      <filter id="a" width={19.017} height={19.017} x={2.492} y={3.496} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy={1.004}/>
        <feGaussianBlur stdDeviation={1.004}/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1762_18"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1762_18" result="shape"/>
      </filter>
    </defs>
  </svg>);
const ForwardRef = forwardRef(SvgHub);
export default ForwardRef;
