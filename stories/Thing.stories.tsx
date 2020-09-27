import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClickOutside, Props } from '../src';

const meta: Meta = {
  title: 'ClickOutside',
  component: ClickOutside,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <ClickOutside {...args}>
    <Image />
  </ClickOutside>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  onClickOutside: function() {
    alert('click-outside');
  },
};

const Image = () => (
  <div
    style={{
      width: '240px',
      height: '240px',
      backgroundImage: 'url(https://s1.ax1x.com/2020/09/27/0F1T2j.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '4px',
    }}
  ></div>
);
