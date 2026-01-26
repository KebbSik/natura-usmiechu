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
    viewBox="0 0 81 48"
    fill="none"
    stroke="currentColor"
    strokeWidth={25}
    {...props}
  >
    <path
      d="M4.98855 22.5599C4.98855 22.5599 1.41189 31.9114 6.53511 43.5966C11.6583 55.2819 6.13745 27.927 14.313 27.927C22.4886 27.927 17.3228 54.9969 21.9027 43.5966C26.4827 32.1964 23.6375 22.5599 23.6375 22.5599C32.5283 9.1205 24.6626 -3.40074 14.313 3.42156C3.43728 -2.83232 -2.81798 9.12042 4.98855 22.5599Z"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M56.9885 22.5599C56.9885 22.5599 53.4119 31.9114 58.5351 43.5966C63.6583 55.2819 58.1375 27.927 66.313 27.927C74.4886 27.927 69.3228 54.9969 73.9027 43.5966C78.4827 32.1964 75.6375 22.5599 75.6375 22.5599C84.5283 9.1205 76.6626 -3.40074 66.313 3.42156C55.4373 -2.83232 49.182 9.12042 56.9885 22.5599Z"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.04663 21.3535L75.9557 21.3535"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.9885 22.5599C30.9885 22.5599 27.4119 31.9114 32.5351 43.5966C37.6583 55.2819 32.1375 27.927 40.313 27.927C48.4886 27.927 43.3228 54.9969 47.9027 43.5966C52.4827 32.1964 49.6375 22.5599 49.6375 22.5599C58.5283 9.1205 50.6626 -3.40074 40.313 3.42156C29.4373 -2.83232 23.182 9.12042 30.9885 22.5599Z"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="8.59216"
      y="17.3828"
      width="10.6364"
      height="7.94118"
      rx="2"
      stroke="none"
      fill="currentColor"
    />
    <rect
      x="60.5922"
      y="17.3828"
      width="10.6364"
      height="7.94118"
      rx="2"
      stroke="none"
      fill="currentColor"
    />
    <rect
      x="61.7739"
      y="18.7063"
      width="8.27273"
      height="5.29412"
      rx="1"
      stroke="none"
      fill="white"
    />
    <path
      d="M9.77393 6.79468L12.1376 9.44174L14.5012 8.11821L16.8648 9.44174L19.2285 6.79468"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.7739 6.79468L64.1376 9.44174L66.5012 8.11821L68.8648 9.44174L71.2285 6.79468"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.7739 6.79468L38.1376 9.44174L40.5012 8.11821L42.8648 9.44174L45.2285 6.79468"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="34.5922"
      y="17.3828"
      width="10.6364"
      height="7.94118"
      rx="2"
      stroke="none"
      fill="currentColor"
    />
    <rect
      x="35.7739"
      y="18.7063"
      width="8.27273"
      height="5.29412"
      rx="1"
      stroke="none"
      fill="white"
    />
    <rect
      x="9.77393"
      y="18.7063"
      width="8.27273"
      height="5.29412"
      rx="1"
      stroke="none"
      fill="white"
    />
  </svg>
);

export default SvgComponent;
