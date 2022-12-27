import { ComponentMeta, Story } from '@storybook/react';
import Vault from './Vault';
import { IVaultProps, VaultCardType } from './Vault.types';

export default {
  title: 'Pages/Vault',
  component: Vault,
} as ComponentMeta<typeof Vault>;

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
const cardsConnected: VaultCardType[] = [
  {
    body1: 'Locked:',
    body2: '1,000.00',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Available:',
    body2: '40.00',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Vault Value:',
    body2: '$249,014.55',
    change: '+12%',
    icon: 'default-1.png',
  },
];
const cards: VaultCardType[] = [
  {
    body1: 'Locked:',
    body2: 'N/A',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Available:',
    body2: 'N/A',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Vault Value:',
    body2: 'N/A',
    change: '+12%',
    icon: 'default-1.png',
  },
];
const Template: Story<IVaultProps> = (args) => <Vault {...args} />;

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
  buttonText: 'Connect Wallet',
  title: 'Claim SDEX',
  caption: 'Your vault balances are displayed below:',
  cards,
};

export const Connected = Template.bind({});
Connected.args = {
  navbarProps: {
    items: navLinks,
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Withdraw',
  title: 'Claim SDEX',
  caption: 'Your vault balances are displayed below:',
  icon: '/lock.png',
  cards: cardsConnected,
};
