import { ComponentMeta, Story } from '@storybook/react';
import Leaderboard from './Leaderboard';
import { ILeaderboardProps } from './Leaderboard.types';

import { Variant } from '../../atoms/NewSmallCard/Card.types';

export default {
  title: 'Pages/Leaderboard',
  component: Leaderboard,
} as ComponentMeta<typeof Leaderboard>;

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
    heading: '6,485',
    body: 'Total Owners',
    icon: 'TotalOwners.png',
    variant: 'nft' as Variant,
  },
  {
    heading: '2,643,183',
    body: 'Total Points',
    icon: 'TotalPoints.png',
    variant: 'nft2' as Variant,
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
// const mineAPYHeader: IHeaderProps[] = [
//   {
//     key: 'rank',
//     display: 'Rank',
//   },
//   {
//     key: 'walletId',
//     display: 'Wallet ID',
//   },
//   {
//     key: 'ownership',
//     display: 'Ownership',
//   },

// ];
// const mineAPYRows: RowType[] = [
//   {
//     rank: '1',
//     walletId: '0x0582f...8417',
//     ownership: '9.442%',
//   },
//   {
//     rank: '2',
//     walletId: '0x0582f...8417',
//     ownership: '8.002%',
//   },
//   {
//     rank: '3',
//     walletId: '0x0582f...8417',
//     ownership: '3.116%',
//   },
// ];
const Template: Story<ILeaderboardProps> = (args) => <Leaderboard {...args} />;

export const standard = Template.bind({});
standard.args = {
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
  cardProps: cards,
  caption: 'View a global overview of the protocol statistics.',
  title: 'Owners',
  eyebrow: 'Home',
  // tableProps: {
  //   header: mineAPYHeader,
  //   rows: mineAPYRows,
  //   selected: {
  //     firstTitle: 'Action',
  //     caption: '',
  //     secondTitle: '',
  //     buttons: [],
  //   },
  // },
};
