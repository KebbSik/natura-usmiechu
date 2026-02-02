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
    viewBox="0 0 72 66"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M28 7.49683L31.3871 10.4968C33.9971 8.20939 37.1844 8.31924 39.129 10.4968L43 7.49683"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.1699 26.7681C19.1699 26.7681 12.842 37.9899 21.9061 52.0122C30.9703 66.0345 21.2026 33.2086 35.6671 33.2086C50.1316 33.2086 40.992 65.6925 49.095 52.0122C57.198 38.3319 52.1642 26.7681 52.1642 26.7681C67.8941 10.6408 53.9778 -4.38465 35.6671 3.80212C16.4253 -3.70255 5.35833 10.6407 19.1699 26.7681Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 29.4968C17.5 25.4968 1.5 27.4968 1.5 27.4968V63.9969H70.5V27.9968C70.5 27.9968 54.4999 25.9968 56.5 27.9969C58.5001 29.997 57.0042 59.497 46 59.497C34.9958 59.497 43.5 37.9977 35.5 37.9976C29.5 37.9975 35.9999 57.8291 26.5 59.497C16.1432 61.3154 10.5 33.4968 14 29.4968Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
