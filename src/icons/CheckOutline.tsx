import React, { Ref, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CheckOutline = (
  { size = 24, ...props }: Props,
  svgRef: Ref<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(CheckOutline);
export default ForwardRef;
