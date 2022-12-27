import { ComponentMeta, Story } from '@storybook/react';
import Claim from './Claim';
import { IClaimProps, ClaimCardType } from './Claim.types';

export default {
  title: 'Pages/Claim',
  component: Claim,
} as ComponentMeta<typeof Claim>;

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
const cards: ClaimCardType[] = [
  {
    body1: 'sSDEX Balance:',
    body2: 'N/A',
    icon: 'default-1.png',
  },
  {
    body1: 'AVAX Balance:',
    body2: 'N/A',
    icon: 'icon.png',
  },
];
const cardsConnected: ClaimCardType[] = [
  {
    body1: 'sSDEX Balance:',
    body2: '0.00',
    icon: 'default-1.png',
  },
  {
    body1: 'AVAX Balance:',
    body2: '1,000.00',
    icon: 'icon.png',
  },
];
const Template: Story<IClaimProps> = (args) => <Claim {...args} />;

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
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  cards: cardsConnected,
};

export const ClaimToken = Template.bind({});
ClaimToken.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: 'InfoOutlined',
  referralText: 'You may be eligible to claim with a Referral Link.',
  cards: cardsConnected,
};

export const ClaimTokenReffer = Template.bind({});
ClaimTokenReffer.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: '',
  referralText: 'Your referrer is',
  referralValue: '0x0000000000000000000000000000000.',
  cards: cardsConnected,
};

export const ConfirmingTransaction = Template.bind({});
ConfirmingTransaction.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: '',
  referralText: 'Your referrer is',
  referralValue: '0x0000000000000000000000000000000.',
  confirmingStatus: true,
  modalTitle: 'Confirming transaction...',
  modalBody: 'Please wait',
  modelImage: 'animation-loading.png',
  cards: cardsConnected,
};

export const TransactionConfirmed = Template.bind({});
TransactionConfirmed.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: '',
  referralText: 'Your referrer is',
  referralValue: '0x0000000000000000000000000000000.',
  confirmingStatus: true,
  modalTitle: 'Transaction Confirmed',
  modalBody: 'Please wait for the claimbot to process your claim.',
  modelImage: 'transaction-conf.png',
  cards: cardsConnected,
};

export const Success = Template.bind({});
Success.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: '',
  referralText: 'Your referrer is',
  referralValue: '0x0000000000000000000000000000000.',
  confirmingStatus: true,
  modelTopImg: 'success.png',
  modalTitle: 'Success!',
  claimValueDisplay: true,
  modalBody: 'has been added to your wallet.',
  followLink: 'Make sure to follow the Sigmadex socials below:',
  modelCloseText: 'Close',
  cards: cardsConnected,
};

export const Failed = Template.bind({});
Failed.args = {
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
  buttonText: 'Claim Tokens',
  title: 'Claim sSDEX',
  caption:
    'As part of our brand awareness initiative, both loyal and newcomers to the AVAX community are eligible to claim free sSDEX tokens relative to their AVAX balance.',
  icon: '/lock.png',
  claimText: 'This wallet is eligble to claim:',
  claimValue: '10,000 sSDEX',
  referralIcon: '',
  referralText: 'Your referrer is',
  referralValue: '0x0000000000000000000000000000000.',
  confirmingStatus: true,
  modelTopImg: 'failed.png',
  modalTitle: 'Oops!',
  modalBody: 'Something went wrong. This wallet has already claimed sSDEX.',
  modelCloseText: 'Close',
  cards: cardsConnected,
};
