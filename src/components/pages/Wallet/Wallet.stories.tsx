import { ComponentMeta, Story } from '@storybook/react';
import { ICardProps } from '../../atoms/Card/Card.types';
import Wallet from './Wallet';
import { IWalletProps } from './Wallet.types';

export default {
  title: 'Pages/Wallet',
  component: Wallet,
} as ComponentMeta<typeof Wallet>;

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
const cards: ICardProps[] = [
  {
    variant: 'standard',
    heading: '$62,512.02',
    subtitle: '62,512.02 SDEX',
    body: 'SDEX',
    icon: '/wallet-1.png',
  },
  {
    variant: 'standard',
    heading: '$10,000.00',
    subtitle: '10,000 USDT',
    body: 'USDT',
    icon: '/wallet-2.png',
  },
  {
    variant: 'standard',
    heading: '$10,000.00',
    subtitle: '10,000 USDT',
    body: 'USDC',
    icon: '/wallet-3.png',
  },
  {
    variant: 'standard',
    heading: '$10,000.00',
    subtitle: '10,000 USDT',
    body: 'SDEX-SLP',
    icon: '/wallet-4.png',
  },
];
const apyCards: ICardProps[] = [
  {
    variant: 'nft',
    colors: ['#FADD46', '#FFB547'],
    heading: 'No Penalties',
    subtitle: 'Status:',
    body: 'Owned (1)',
  },
  {
    variant: 'nft',
    colors: ['#46CEFA', '#2B6CCC'],
    heading: 'APY Multiplier',
    subtitle: 'Status:',
    body: 'Owned (1)',
  },
];
const Template: Story<IWalletProps> = (args) => <Wallet {...args} />;

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
  caption: 'View the current status of your wallet',
  title: 'Wallet',
  eyebrow: 'Wallet',
  caption2: 'View and manage the APY NFTs you own.',
  title2: 'APY NFTs',
  cards,
  apyCards,
};
