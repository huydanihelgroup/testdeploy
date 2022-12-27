import { ICardProps } from '../../atoms/Card/Card.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface IWalletProps {
  eyebrow: string;
  title: string;
  title2: string;
  caption: string;
  caption2: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cards: ICardProps[];
  apyCards: ICardProps[];
}
