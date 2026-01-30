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
    viewBox="0 0 63 82"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M9.54448 38.4495C9.54448 38.4495 1.29756 54.8588 13.1105 75.3631C24.9234 95.8673 12.1936 47.8673 31.0445 47.8673C49.8955 47.8673 37.9843 95.3673 48.5445 75.3631C59.1048 55.3588 52.5445 38.4495 52.5445 38.4495C73.0446 14.8673 54.9081 -7.10392 31.0445 4.86728C5.96762 -6.10651 -8.45552 14.8671 9.54448 38.4495Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      cx="22.5035"
      cy="19.9963"
      rx="7"
      ry="8.5"
      stroke="none"
      fill="currentColor"
    />
    <ellipse
      cx="20.0035"
      cy="16.4963"
      rx="1.5"
      ry="2"
      stroke="none"
      fill="white"
    />
    <ellipse
      cx="39.5035"
      cy="19.9963"
      rx="7"
      ry="8.5"
      stroke="none"
      fill="currentColor"
    />
    <ellipse
      cx="37.0035"
      cy="16.4963"
      rx="1.5"
      ry="2"
      stroke="none"
      fill="white"
    />
    <path
      d="M19.5035 36.4963C27.7141 42.5799 32.6065 43.7217 42.5035 36.4963"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.5035 33.2132C41.1761 36.1559 42.5471 36.8679 45.7425 37.4325"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5035 37.9941C18.5205 37.894 19.4804 36.6835 20.6429 33.6539"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SvgComponent;
