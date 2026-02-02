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
    viewBox="0 0 43 81"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M13.777 6.5L17.277 12C19.974 7.80636 23.2675 8.00776 25.277 12L29.277 6.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.71185 31.6544H7.7009C-5.37141 7.77054 4.18125 -1.51752 18.2589 2.46354C21.235 3.80344 23.2135 3.94433 25.2978 2.46339C38.8728 -2.40225 47.9229 11.7513 35.8564 31.6544H32.8396M9.71185 31.6544V40.5H32.8396V31.6544M9.71185 31.6544H32.8396"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M14.777 40.5C14.777 40.5 14.777 69 14.777 70.5C14.777 72 16.777 77 17.277 78C17.777 79 24.277 79 25.277 78C26.277 77 27.277 72 27.277 70.5C27.277 69 27.277 40.5 27.277 40.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30.777 45.5L10.277 52.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M31.777 52.5L11.277 59.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M31.777 59.5L11.277 66.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgComponent;
