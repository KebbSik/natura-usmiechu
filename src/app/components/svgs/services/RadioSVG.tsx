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
    viewBox="0 0 81 73"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M27.5603 38.1874C27.5603 38.1874 22.8832 46.7077 29.5828 57.3543C36.2824 68.0008 29.0628 43.0775 39.7539 43.0775C50.4451 43.0775 43.6897 67.7412 49.6789 57.3543C55.6681 46.9674 51.9475 38.1874 51.9475 38.1874C63.5739 25.9427 53.2879 14.5344 39.7539 20.7503C25.5318 15.0523 17.3518 25.9426 27.5603 38.1874Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 6H9.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M13.5 6H16"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M20 6H21.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M17 38H64"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M9 23V11.5H18.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M72.5 54.5V66H63"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M9 54.5V66H18.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M72.5 23V11.5H63"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="1.5"
      y="1.5"
      width="78"
      height="70"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

export default SvgComponent;
