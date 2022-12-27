import { ComponentMeta, Story } from '@storybook/react';
import { IHeaderProps } from '../../atoms/Table/Table.types';
import Positions from './Positions';
import { IPositionProps, RowType } from './Positions.types';

export default {
  title: 'Pages/Positions',
  component: Positions,
} as ComponentMeta<typeof Positions>;

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

const Template: Story<IPositionProps> = (args) => <Positions {...args} />;

const mineAPYHeader: IHeaderProps[] = [
  {
    key: 'token',
    display: 'Token',
  },
  {
    key: 'active_duration',
    display: 'Active Duration',
  },
  {
    key: 'maturity',
    display: 'Maturity',
  },
  {
    key: 'units_staked',
    display: 'Units Staked',
  },
  {
    key: 'nfty_apy',
    display: 'NFT APY',
  },
];
const mineAPYRows: RowType[] = [
  {
    token: 'SDEX',
    active_duration: '720 days',
    maturity: '82 days remaining',
    units_staked: '45,000 SDEX',
    nfty_apy: '112%',
  },
  {
    token: 'SDEX',
    active_duration: '365 days',
    maturity: 'Matured',
    units_staked: '10,000 SDEX',
    nfty_apy: '42%',
  },
  {
    token: 'SDEX LP',
    active_duration: '365 days',
    maturity: '4 days remaining',
    units_staked: '55 JLP',
    nfty_apy: '200%',
  },
];

const earningHeader: IHeaderProps[] = [
  {
    key: 'token',
    display: 'Token',
  },
  {
    key: 'active_duration',
    display: 'Active Duration',
  },
  {
    key: 'maturity',
    display: 'Maturity',
  },
  {
    key: 'units_staked',
    display: 'Units Staked',
  },
  {
    key: 'earned',
    display: 'Earned',
  },
  {
    key: 'nfty_apy',
    display: 'NFT APY',
  },
];
const earningRows: RowType[] = [
  {
    token: 'SDEX',
    active_duration: '720 days',
    maturity: '82 days remaining',
    units_staked: '45,000 SDEX',
    earned: '5,000 SDEX',
    nfty_apy: '112%',
  },
  {
    token: 'SDEX',
    active_duration: '365 days',
    maturity: 'Matured',
    units_staked: '10,000 SDEX',
    earned: '5,000 SDEX',
    nfty_apy: '42%',
  },
];

export const Standard = Template.bind({});
Standard.args = {
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
  caption: 'View your active stakes.',
  title: 'Positions',
  eyebrow: 'Positions',
  topButtonProps: {
    iconLeft: true,
    variant: 'contained',
    children: 'Earn APY',
  },
  tableProps1: {
    header: mineAPYHeader,
    rows: mineAPYRows,
    selected: {
      buttons: [{ variant: 'outlined', children: 'Mint APY NFT' }],
      caption: '0.0014% per SDEX',
      firstTitle: 'Actions:',
      secondTitle: 'Daily APY Rate:',
    },
  },
  tableProps2: {
    header: earningHeader,
    rows: earningRows,
    selected: {
      buttons: [
        { variant: 'outlined', children: 'Claim Interest' },
        { variant: 'outlined', children: 'Withdraw' },
      ],
      caption: '5,000 SDEX',
      firstTitle: 'Actions:',
      secondTitle: 'Available:',
    },
  },
};

export const Wallet = Template.bind({});
Wallet.args = {
  navbarProps: {
    items: navLinks,
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
  },
  cardTitle: 'Farm APY NFT',
  cardTitle1: 'Earning',
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  caption: 'View your active stakes.',
  title: 'Positions',
  eyebrow: 'Positions',
  dollarIcon: 'Vector.png',
  waveIcon: 'wave.png',
  topButtonProps1: {
    iconLeft: false,
    iconRight: false,
    variant: 'contained',
    children: 'Earn APY',
  },
  topButtonProps2: {
    iconLeft: false,
    iconRight: false,
    variant: 'contained',
    children: `Mine APY`,
  },
  tableProps1: {
    header: mineAPYHeader,
    rows: mineAPYRows,
    selected: {
      firstTitle: 'Actions:',
      caption: '0.0014% per SDEX',
      secondTitle: 'Daily APY Rate:',
      buttons: [{ variant: 'contained', children: 'Mint APY NFT' }],
    },
  },
  tableProps2: {
    header: earningHeader,
    rows: earningRows,
    selected: {
      firstTitle: 'Actions:',
      caption: '5,000 SDEX',
      secondTitle: 'Available:',
      buttons: [
        { variant: 'contained', children: 'Claim Interest' },
        { variant: 'contained', children: 'Withdraw' },
      ],
    },
  },
};
