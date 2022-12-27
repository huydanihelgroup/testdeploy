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
      d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.325C2 5.245 4.42 2.825 7.5 2.825C9.24 2.825 10.91 3.635 12 4.915C13.09 3.635 14.76 2.825 16.5 2.825C19.58 2.825 22 5.245 22 8.325C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
      fill={color}
    />
  </svg>
);

export default Icon;
