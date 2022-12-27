import { ICardProps } from '../../atoms/Card/Card.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface INewClaimProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cardProps: ICardProps[];
  connect: React.MouseEvent<HTMLElement>;
}
