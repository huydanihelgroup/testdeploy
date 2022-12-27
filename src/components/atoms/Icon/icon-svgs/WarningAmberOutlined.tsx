import { ReactElement } from 'react';
import { IconSizes, IconSvgProps } from '../Icon.types';

const Icon = ({
  color = 'black',
  size = IconSizes.SM,
}: IconSvgProps): ReactElement => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5Z"
      fill={color}
    />
    <path d="M13 16.5H11V18.5H13V16.5Z" fill={color} />
    <path d="M13 10.5H11V15.5H13V10.5Z" fill={color} />
  </svg>
);

export default Icon;
