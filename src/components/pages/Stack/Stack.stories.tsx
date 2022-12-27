import { ComponentMeta, Story } from '@storybook/react';
import { Variant } from '../../atoms/Card/Card.types';
import Stake from './Stack';
import { IStackProps } from './Stack.types';

export default {
  title: 'Pages/Stake',
  component: Stake,
} as ComponentMeta<typeof Stake>;

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

const Template: Story<IStackProps> = (args) => <Stake {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  cardProps: {
    variant: 'custom' as Variant,
  },
  cardTitle: 'Stake',
  imageProps: 'default-1.png',
  navbarProps: {
    items: navLinks,
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
  },
  textLabelProps: {
    variant: 'subtitle1',
    children: 'SDEX Balance:',
    isbold: true,
  },
  inputTextLabelProps1: {
    variant: 'caption',
    children: 'Set Amount',
    isbold: true,
  },
  inputTextLabelProps2: {
    variant: 'caption',
    children: 'Set Stake Duration',
    isbold: true,
  },
  inputTextLabelProps3: {
    variant: 'subtitle2',
    children: 'APY :',
    isbold: true,
  },
  inputTextLabelProps4: {
    variant: 'subtitle2',
    children: '312 %',
    isbold: true,
  },
  inputTextLabelProps5: {
    variant: 'subtitle2',
    children: 'Estimated ROI After Maturity:',
    isbold: true,
  },
  inputTextLabelProps6: {
    variant: 'subtitle2',
    children: '12,888 SDEX',
    isbold: true,
  },
  ButtonLeftProps: {
    variant: 'outlined',
    size: 'medium',
    children: 'Attach APY NFT',
  },
  ButtonRightProps: {
    variant: 'contained',
    size: 'medium',
    children: 'Deposit',
  },
  ButtonCenterProps: {
    variant: 'outlined',
    size: 'medium',
    children: 'Approve',
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
};
