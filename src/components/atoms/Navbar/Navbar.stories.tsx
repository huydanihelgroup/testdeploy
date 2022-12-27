import { Story, Meta } from '@storybook/react/types-6-0';
import Navbar from './Navbar';
import { INavbarProps } from './Navbar.types';

export default {
  title: 'Core/Navbar',
  component: Navbar,
  argTypes: {
    variant: {
      options: ['connect', 'connected', 'wrong_network'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<INavbarProps> = (args) => (
  <Navbar
    {...args}
    buttonText={
      args.variant === 'wrong_network' ? 'Wrong Network' : 'Connect Wallet'
    }
    connectedText="0x90R4...C2Y5"
  >
    {args.children}
  </Navbar>
);
const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Wallet',
    link: '/wallet',
  },
  {
    name: 'Positions',
    link: '/positions',
  },
  {
    name: 'Governance',
    link: '/governance',
  },
];
export const Connect = Template.bind({});
Connect.args = {
  variant: 'connect',
  items: navLinks,
};

export const Connected = Template.bind({});
Connected.args = {
  variant: 'connected',
  items: navLinks,
};

export const WrongNetwork = Template.bind({});
WrongNetwork.args = {
  variant: 'wrong_network',
  items: navLinks,
};

export const NoItems = Template.bind({});
NoItems.args = {
  variant: 'connect',
  items: [],
};
