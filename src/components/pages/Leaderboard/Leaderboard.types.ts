import { ICardProps } from '../../atoms/NewSmallCard/Card.types';
import { IFooterProps } from '../../atoms/NewFooter/Footer.types';
import { INavbarProps } from '../../atoms/NewNavbar/Navbar.types';

export interface ILeaderboardProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cardProps: ICardProps[];
  icon: string;
  account: string;
  connect: React.MouseEventHandler<HTMLButtonElement>;
  copy: React.MouseEventHandler<HTMLButtonElement>;
}
