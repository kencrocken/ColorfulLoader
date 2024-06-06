import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'ColorfulLoader',
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    colors: [
      '#FFE629',
      '#18A6D1',
      '#CCC205',
      '#54D3D3',
      '#9776C1',
      '#ED4545',
      '#FF9100',
      '#65B730',
      '#FF6136',
      '#AD7745',
      '#FF71A0'
    ],
    animationSteps: 11,
    animationDuration: 5
  }
};
