import { ICardProps } from '../../atoms/SmallCard/Card.types';
import { IFooterProps } from '../../atoms/NewFooter/Footer.types';
import { INavbarProps } from '../../atoms/NewNavbar/Navbar.types';
import { IBannerCardProps } from '../../atoms/BannerCard/Card.types';
import { Variant as CardVariant } from '../../atoms/SmallCard/Card.types';
export type Variant = 'connect' | 'connected' | 'wrong_network';


export interface ClaimCardType {
  icon: string;
  heading: string;
  body: string;
  change?: string;
  variant: CardVariant,
}

export interface IOwnershipProps {
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  title: string;
  caption: string;
  caption2: any;
  refresh: boolean;
  percent: string;
  icon: string;
  cardProps: ICardProps[];
  variant:  Variant;
  buttonText?: string;
  bannerCardProps?: IBannerCardProps;
  connected: boolean;
  claimValueDisplay: boolean;  
  refLink: string;
  confirmingStatus: boolean;
  modalTitle: string;
  modelCloseText: string;
  modelTopImg: string;
  modalBody: string;
  disableButton: boolean;
  hasClaimed: boolean;
  connect: React.MouseEventHandler<HTMLButtonElement>;
  copy: React.MouseEventHandler<HTMLButtonElement>;
}
