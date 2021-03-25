import Button from './Button';

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  outline: false,
  backgroundColor: 'teal',
  color: 'white',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  outline: true,
  backgroundColor: 'teal',
  color: 'white',
};

export default {
  title: 'Storybook Demo/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  }
};
