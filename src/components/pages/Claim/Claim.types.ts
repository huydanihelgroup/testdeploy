import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface ClaimCardType {
  icon: string;
  body1: string;
  body2: string;
  change?: string;
}

export interface IClaimProps {
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  buttonText: string;
  title: string;
  caption: string;
  icon: string;
  claimText: string;
  claimValue: string;
  referralIcon: string;
  referralText: string;
  referralValue: string;
  confirmingStatus: boolean;
  modalTitle: string;
  modalBody: string;
  modelImage: string;
  modelCloseText: string;
  modelTopImg: string;
  followLink: string;
  claimValueDisplay: boolean;
  cards: ClaimCardType[];
}
