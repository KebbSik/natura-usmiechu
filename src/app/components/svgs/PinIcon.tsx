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
    viewBox="0 -20 304 472"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75-44 65-37 48.5l-16 17q-6-6-16-18t-35.5-46.5-45.5-67T16 224 0 152Q0 90 43.5 46.5T149 3zm0 202q22 0 38-15.5t16-37.5-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205z" />
  </svg>
);

export default SvgComponent;
