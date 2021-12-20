import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'app/components/Button';

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  title: 'PrimaryButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  title: 'SecondaryButton',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  title: 'TertiaryButton',
};
