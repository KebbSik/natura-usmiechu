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
    viewBox="0 0 63 84"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M5.74194 78.1671V36.1475C5.74194 30.4694 15.5484 30.4693 15.5484 36.1475V78.1671C15.5484 83.2777 5.74194 83.2777 5.74194 78.1671Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6451 31.889V18.7917"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.7419 78.1671V36.1475C43.7419 30.4694 53.5484 30.4693 53.5484 36.1475V78.1671C53.5484 83.2777 43.7419 83.2777 43.7419 78.1671Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.6451 31.889V18.7917"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.129 78.1671V36.1475C24.129 30.4694 33.9355 30.4693 33.9355 36.1475V78.1671C33.9355 83.2777 24.129 83.2777 24.129 78.1671Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.0322 31.889V18.7917"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.7364 13.4979C35.6869 11.8677 32.771 10.2821 26.9885 9.11108C24.7116 12.1614 24.4186 14.9324 26.9885 18.2222C32.8707 16.8609 35.7867 15.1563 35.7364 13.4979ZM35.7364 13.4979H38.6532"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4189 1.5C15.4508 1.5 19.3389 5.26465 19.3389 9.68066C19.3388 14.0966 15.4507 17.8613 10.4189 17.8613C5.38736 17.8611 1.50006 14.0965 1.5 9.68066C1.5 5.26477 5.38732 1.5002 10.4189 1.5Z"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      d="M11.6451 5.26392C13.4838 5.26382 15.3226 6.4029 15.3226 8.68055"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.6451 18.7917C39.4513 1.70843 51.9396 7.29864 56 6.26392"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
