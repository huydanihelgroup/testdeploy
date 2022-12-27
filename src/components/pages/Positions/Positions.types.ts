import { IButtonProps } from '../../atoms/Button/Button.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';
import { ITableProps } from '../../atoms/Table/Table.types';

export type tableKeys =
  | 'token'
  | 'active_duration'
  | 'maturity'
  | 'units_staked'
  | 'earned'
  | 'nfty_apy';
export type RowType = {
  [K in tableKeys]?: string;
};

export interface IPositionProps {
  eyebrow: string;
  title: string;
  caption: string;
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  topButtonProps: IButtonProps;
  topButtonProps1: IButtonProps;
  topButtonProps2: IButtonProps;
  tableProps1: ITableProps;
  tableProps2: ITableProps;
  cardTitle: string;
  cardTitle1: string;
  waveIcon: string;
  dollarIcon: string;
}

export interface HeaderType {
  key: tableKeys;
  display: string;
}

export interface ButtonType {
  iconLeft: boolean;
  iconRight: boolean;
  variant: string;
  children: string;
}
