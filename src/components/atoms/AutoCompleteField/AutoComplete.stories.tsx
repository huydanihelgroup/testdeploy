import { Story, Meta } from '@storybook/react';
import AutoCompleteField from './AutoComplete';
import { IAutoCompleteProps, OptionsRowProps } from './AutoComplete.types';

export default {
  title: 'Core/AutoCompleteField',
  component: AutoCompleteField,
  argTypes: {
    variant: {
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'select' },
    },
  },
} as Meta;

const options: OptionsRowProps[] = [
  { value: 'value1', label: 'value1' },
  { value: 'value2', label: 'value2' },
  { value: 'value3', label: 'value3' },
];

const Template: Story<IAutoCompleteProps> = (args) => (
  <AutoCompleteField {...args}>{args.children}</AutoCompleteField>
);

export const Standard = Template.bind({});
Standard.args = {
  placeholder: 'Label',
  variant: 'standard',
  optionProps: options,
};

export const Outlined = Template.bind({});
Outlined.args = {
  placeholder: 'Label',
  variant: 'outlined',
  optionProps: options,
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Label',
  variant: 'filled',
  optionProps: options,
};

export const HasError = Template.bind({});
HasError.args = {
  placeholder: 'Label',
  variant: 'standard',
  hasError: true,
  optionProps: options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Label',
  variant: 'standard',
  disabled: true,
  optionProps: options,
};
