import type { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const Logo: FC<IconProps> = ({ ...otherProps }) => {
  return (
    <Icon
      fill="none"
      height="439"
      viewBox="0 0 317 439"
      width="317"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M249.302 281.455C225.481 301.828 196.142 313.567 165.658 315.161C165.906 313.496 166.275 311.565 166.779 309.353C168.861 300.196 172.45 289.233 176.562 276.672C178.744 270.005 181.074 262.889 183.404 255.353C189.74 234.862 195.91 211.651 195.708 191.666C195.606 181.525 193.873 171.007 188.699 161.792C183.291 152.161 174.722 145.044 163.185 141.251C139.291 133.395 120.204 145.34 106.917 160.467C93.8673 175.323 83.4751 196.183 75.0024 214.973C71.999 221.633 69.2597 227.965 66.7042 233.872C61.6062 245.657 57.2399 255.75 52.968 263.386C52.5307 264.168 52.1199 264.874 51.7362 265.511C31.4138 241.83 18.7154 211.89 15.6969 179.952C12.414 145.217 20.8002 110.419 39.3396 81.5045C57.8718 52.6013 85.3572 31.4212 117.011 21.4147C148.653 11.4122 182.634 13.1463 213.211 26.3449C243.802 39.5498 269.195 63.4641 284.938 94.1572C300.686 124.86 305.753 160.363 299.221 194.585C292.689 228.803 274.996 259.481 249.302 281.455Z"
        stroke="url(#paint0_linear_41_2)"
        strokeWidth="30"
      />
      <path
        d="M249.302 281.455C225.481 301.828 196.142 313.567 165.658 315.161C165.906 313.496 166.275 311.565 166.779 309.353C168.861 300.196 172.45 289.233 176.562 276.672C178.744 270.005 181.074 262.889 183.404 255.353C189.74 234.862 195.91 211.651 195.708 191.666C195.606 181.525 193.873 171.007 188.699 161.792C183.291 152.161 174.722 145.044 163.185 141.251C139.291 133.395 120.204 145.34 106.917 160.467C93.8673 175.323 83.4751 196.183 75.0024 214.973C71.999 221.633 69.2597 227.965 66.7042 233.872C61.6062 245.657 57.2399 255.75 52.968 263.386C52.5307 264.168 52.1199 264.874 51.7362 265.511C31.4138 241.83 18.7154 211.89 15.6969 179.952C12.414 145.217 20.8002 110.419 39.3396 81.5045C57.8718 52.6013 85.3572 31.4212 117.011 21.4147C148.653 11.4122 182.634 13.1463 213.211 26.3449C243.802 39.5498 269.195 63.4641 284.938 94.1572C300.686 124.86 305.753 160.363 299.221 194.585C292.689 228.803 274.996 259.481 249.302 281.455Z"
        stroke="url(#paint1_linear_41_2)"
        strokeWidth="30"
      />
      <path
        d="M104 163.5C57.8517 235.286 24.182 333.618 20.3647 408.155C19.9155 416.926 27.0919 424 35.8746 424H286.109C310.893 422.017 293.132 347.728 252 297"
        stroke="url(#paint2_linear_41_2)"
        strokeWidth="28.3632"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_41_2"
          x1="158.5"
          x2="158.5"
          y1="6.10352e-05"
          y2="330.347"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_41_2"
          x1="158.5"
          x2="158.5"
          y1="6.10352e-05"
          y2="330.347"
        >
          <stop stopColor="#3F20FF" />
          <stop offset="0.515625" stopColor="#6466FA" />
          <stop offset="0.8125" stopColor="#303181" />
          <stop offset="1" stopColor="#040653" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_41_2"
          x1="153.061"
          x2="153.061"
          y1="37.3"
          y2="424"
        >
          <stop stopColor="#3033FF" />
          <stop offset="0.0001" stopColor="#3033FF" />
          <stop offset="0.520833" stopColor="#7F80EF" />
          <stop offset="0.739583" stopColor="#303181" />
          <stop offset="1" stopColor="#191B6B" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default Logo;
