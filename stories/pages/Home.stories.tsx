import Home from '@/app/page';
import { Theme } from '@radix-ui/themes';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/App',
  component: Home,
} satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
  render: () => (
    <div>
      <Theme appearance="dark">
        <Home />
      </Theme>
    </div>
  ),
} satisfies Story;
