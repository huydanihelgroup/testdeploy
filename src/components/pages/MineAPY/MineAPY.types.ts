import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface IMineAPYProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cardTitle: string;
  button1Text: string;
  button2Text: string;
  cardBody: string;
  cardValue: string;
  input1Label: string;
  input1Placeholder: string;
  input2Label: string;
  input2Placeholder: string;
}
