import { ICardProps } from '../../atoms/Card/Card.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';
import { ITableProps } from '../../atoms/Table/Table.types';
import { IAutoCompleteProps } from '../../atoms/AutoCompleteField/AutoComplete.types';

export interface IAdminProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  tableProps: ITableProps;
  cardProps: ICardProps[];
  ButtonProps: string;
  inputProps: string;
  inputProps1: string;
  icon: string;
  autoCompleteProps: IAutoCompleteProps;
  autoCompleteProps1: IAutoCompleteProps;
}
