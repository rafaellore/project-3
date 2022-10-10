import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'A simple title',
  },
};

export const Template = (args) => <Heading {...args} />;
