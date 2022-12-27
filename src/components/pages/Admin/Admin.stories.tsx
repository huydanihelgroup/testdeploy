import { ComponentMeta, Story } from '@storybook/react';
import Admin from './Admin';
import { IAdminProps } from './Admin.types';
import { RowType, IHeaderProps } from '../../atoms/Table/Table.types';
import { OptionsRowProps } from '../../atoms/AutoCompleteField/AutoComplete.types';

export default {
  title: 'Pages/Admin',
  component: Admin,
} as ComponentMeta<typeof Admin>;

const navLinks = [
  {
    name: 'Home',
    link: '/?path=/story/pages-home--protocal-statistics',
  },
  {
    name: 'Wallet',
    link: '/?path=/story/pages-wallet--protocal-statistics',
  },
  {
    name: 'Positions',
    link: '/?path=/story/pages-positions--standard',
  },
  {
    name: 'Governance',
    link: '/?path=/story/pages-governance--protocal-statistics',
  },
];
const mineAPYHeader: IHeaderProps[] = [
  {
    key: 'txId',
    display: 'TxID',
  },
  {
    key: 'timeStamp',
    display: 'Timestamp',
  },
  {
    key: 'user',
    display: 'User',
  },
  {
    key: 'avaxAmt',
    display: 'AVAX Amt',
  },
  {
    key: 'claimAmt',
    display: 'Claim Amt',
  },
  {
    key: 'refAddress',
    display: 'Ref Address',
  },
  {
    key: 'refAmt',
    display: 'Ref Amt',
  },
];
const mineAPYRows: RowType[] = [
  {
    txId: '1',
    timeStamp: '1231564',
    user: 'John doe',
    avaxAmt: '2',
    claimAmt: '500',
    refAddress: '45,asdkjas',
    refAmt: 'N/A',
  },
  {
    txId: '13',
    timeStamp: '1231564',
    user: 'Marie Miller',
    avaxAmt: '2',
    claimAmt: '50125',
    refAddress: '45,asdkjas',
    refAmt: 'N/A',
  },
  {
    txId: '10',
    timeStamp: '1231564',
    user: 'Kenny smith',
    avaxAmt: '2',
    claimAmt: '500',
    refAddress: '45,asdkjas',
    refAmt: 'N/A',
  },
];
const Options: OptionsRowProps[] = [
  { value: 'value1', label: 'value1' },
  { value: 'value2', label: 'value2' },
  { value: 'value4', label: 'value4' },
  { value: 'value5', label: 'value5' },
  { value: 'value6', label: 'value6' },
  { value: 'value7', label: 'value7' },
  { value: 'value8', label: 'value8' },
];
const Options1: OptionsRowProps[] = [
  { value: 'value11', label: 'value11' },
  { value: 'value22', label: 'value22' },
  { value: 'value42', label: 'value42' },
  { value: 'value53', label: 'value53' },
  { value: 'value64', label: 'value64' },
  { value: 'value74', label: 'value74' },
  { value: 'value85', label: 'value85' },
];
const Template: Story<IAdminProps> = (args) => <Admin {...args} />;

export const standard = Template.bind({});
standard.args = {
  navbarProps: {
    items: navLinks,
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  caption: 'View a global overview of the protocol statistics.',
  title: 'Admin',
  eyebrow: 'Home',
  tableProps: {
    header: mineAPYHeader,
    rows: mineAPYRows,
    selected: {
      firstTitle: 'Action',
      caption: '',
      secondTitle: '',
      buttons: [],
    },
  },
  ButtonProps: 'Download csv',
  inputProps: 'Search',
  inputProps1: 'label',
  autoCompleteProps: {
    variant: 'outlined',
    optionProps: Options,
  },
  autoCompleteProps1: {
    variant: 'outlined',
    optionProps: Options1,
  },
};
