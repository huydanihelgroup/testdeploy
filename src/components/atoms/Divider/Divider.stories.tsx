import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'Core/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  return <Divider />;
};

export const Standard = Template.bind({});
Standard.args = {};
