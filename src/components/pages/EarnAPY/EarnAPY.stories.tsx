import { ComponentMeta, Story } from '@storybook/react';
import EarnAPY from './EarnAPY';
import { IEarnAPYProps } from './EarnAPY.types';

export default {
  title: 'Pages/EarnAPY',
  component: EarnAPY,
} as ComponentMeta<typeof EarnAPY>;

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
const Template: Story<IEarnAPYProps> = (args) => <EarnAPY {...args} />;

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
  eyebrow: 'Positions > Create New Staking Position',
  cardTitle: 'Create New Staking Position',
  button1Text: 'Approve',
  button2Text: 'Deposit',
  button3Text: 'Attach APY NFT',
  cardBody: 'APY:',
  cardValue: '728%',
  cardBody2: 'Estimated ROI After Maturity:',
  cardValue2: '12,888 SDEX',
  input1Label: 'Set SDEX Amount',
  input1Placeholder: 'SDEX',
  input2Label: 'Set Stake Duration',
  input2Placeholder: 'Days',
};
