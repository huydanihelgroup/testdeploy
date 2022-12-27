import { ComponentMeta, Story } from '@storybook/react';
import { Variant } from '../../atoms/Card/Card.types';
import NewClaim from './NewClaim';
import { INewClaimProps } from './NewClaim.types';

export default {
  title: 'Pages/NewClaim',
  component: NewClaim,
} as ComponentMeta<typeof NewClaim>;

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

const cards = [
  {
    heading: '62.5k',
    body: 'Total SDEX Staked',
    variant: 'standard' as Variant,
  },
  {
    heading: '44',
    body: 'Total Circulating NFTs',
    icon: 'default-2.png',
    variant: 'standard' as Variant,
  },

  {
    heading: '10.4K',
    body: 'Total APY NFTs Minted',
    icon: 'default-3.png',
    variant: 'standard' as Variant,
  },
  {
    heading: '101',
    body: 'NFT APY Minters',
    icon: 'default-4.png',
    variant: 'standard' as Variant,
  },
  {
    heading: '109',
    body: 'Total APY NFTs Being Farmed',
    icon: 'default-5.png',
    variant: 'standard' as Variant,
  },
  {
    heading: '45.9K',
    body: 'SDEX Burned From Penalties',
    icon: 'default-6.png',
    variant: 'standard' as Variant,
  },
  {
    heading: '594%',
    body: 'Maximum Inflation',
    icon: 'default-7.png',
    variant: 'standard' as Variant,
  },
  {
    heading: '5.5M',
    body: 'LP Tokens Forfeited',
    icon: 'default-8.png',
    variant: 'standard' as Variant,
  },
];

const Template: Story<INewClaimProps> = (args) => <NewClaim {...args} />;

export const ProtocalStatistics = Template.bind({});
ProtocalStatistics.args = {
  navbarProps: {
    items: navLinks,
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 VB',
    rightText: '154869129',
  },
  caption: 'Fractionalized ownership can be claimed by anyone until further notice. You may use your referral link to earn more ownership points. Connect your wallet to view or claim points.',
  title: 'Ownership',
  eyebrow: 'Home',
  cardProps: cards,
};
