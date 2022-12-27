import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { Variant } from '../../atoms/Card/Card.types';
import Ownership from './Ownership';
import { IOwnershipProps } from './Ownership.types';

export default {
  title: 'Pages/Ownership',
  component: Ownership,
} as ComponentMeta<typeof Ownership>;

const navLinks: never[] = [
  // {
  //   name: 'Ownership',
  //   link: '/?path=/story/pages-Ownership--protocal-statistics',
  // },
  // {
  //   name: 'Wallet',
  //   link: '/?path=/story/pages-wallet--protocal-statistics',
  // },
  // {
  //   name: 'Positions',
  //   link: '/?path=/story/pages-positions--standard',
  // },
  // {
  //   name: 'Governance',
  //   link: '/?path=/story/pages-governance--protocal-statistics',
  // },
];

// const BannerCard = {
//   body: 'Ownership Points',
//   icon: 'string',
//   heading: 'string',
//   subtitle: 'string',
// };

const cards = [
  {
    heading: '10,000',
    body: 'Ownership Points',
    icon: 'Doge.png',
    variant: 'opacity' as Variant,
  },
  {
    heading: '100.00',
    body: 'ETH Balance',
    icon: 'Eth.png',
    variant: 'standard' as Variant,
  },

  // {
  //   heading: '10.4K',
  //   body: 'Total APY NFTs Minted',
  //   icon: 'default-3.png',
  //   variant: 'standard' as Variant,
  // },
  // {
  //   heading: '101',
  //   body: 'NFT APY Minters',
  //   icon: 'default-4.png',
  //   variant: 'standard' as Variant,
  // },
  // {
  //   heading: '109',
  //   body: 'Total APY NFTs Being Farmed',
  //   icon: 'default-5.png',
  //   variant: 'standard' as Variant,
  // },
  // {
  //   heading: '45.9K',
  //   body: 'SDEX Burned From Penalties',
  //   icon: 'default-6.png',
  //   variant: 'standard' as Variant,
  // },
  // {
  //   heading: '594%',
  //   body: 'Maximum Inflation',
  //   icon: 'default-7.png',
  //   variant: 'standard' as Variant,
  // },
  // {
  //   heading: '5.5M',
  //   body: 'LP Tokens Forfeited',
  //   icon: 'default-8.png',
  //   variant: 'standard' as Variant,
  // },
];

const Template: Story<IOwnershipProps> = (args) => <Ownership {...args} />;

export const ProtocalStatistics = Template.bind({});
ProtocalStatistics.args = {
  navbarProps: {
    items: navLinks,
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
    connect: (event: React.MouseEvent<HTMLElement>) => null,
  },
  footerProps: {
    copyRightText: '© 2022 VB',
    rightText: '154869129',
  },
  caption:
    'Fractionalized ownership can be claimed by anyone until further notice. You may use your referral link to earn more ownership points. Connect your wallet to view or claim points.',
  title: 'Ownership',
  // bannerCardProps: BannerCard,
  caption2: 'Connected wallet is eligible to claim 10,000 Ownership Points',
  cardProps: cards,
  buttonText: 'Connect Wallet',
  modalBody: 'Please wait',
  modalTitle: 'Claiming Ownership...',
};
