import { SVGProps } from "react";

const SvgComponent = ({
  width = 24,
  height = 24,
  filled = false,
  ...props
}: SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  filled?: boolean;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={0.75}
    {...props}
  >
    <path d="M4 1h1l1.5 5L5 7c0 2 2 4 4 4l1-1.5 5 1.5v1a3 3 0 0 1-3 3C5 15 1 10 1 4a3 3 0 0 1 3-3" />
  </svg>
);

export default SvgComponent;
