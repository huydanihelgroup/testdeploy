import { ICardProps } from '../../atoms/Card/Card.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface IHomeProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cardProps: ICardProps[];
}
