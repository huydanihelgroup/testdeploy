import { IButtonProps } from './../../atoms/Button/Button.types';
import { ICardProps } from './../../atoms/Card/Card.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';
import { ITypographyProps } from '../../atoms/Typography/Typography.types';

export interface IStackProps {
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  cardTitle: string;
  cardProps: ICardProps;
  imageProps: string;
  textLabelProps: ITypographyProps;
  inputTextLabelProps1: ITypographyProps;
  inputTextLabelProps2: ITypographyProps;
  inputTextLabelProps3: ITypographyProps;
  inputTextLabelProps4: ITypographyProps;
  inputTextLabelProps5: ITypographyProps;
  inputTextLabelProps6: ITypographyProps;
  ButtonLeftProps: IButtonProps;
  ButtonCenterProps: IButtonProps;
  ButtonRightProps: IButtonProps;
}
