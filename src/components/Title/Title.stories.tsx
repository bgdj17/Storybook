import { Meta } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    tag: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3'],
      description: "Specify the HTML tag",
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta;

/**This is my title h1 */
export const H1 = (args: TitleProps) => <Title {...args} />;
H1.args = {
  text: "This is my title h1",
  tag: 'h1',
  class: '',
};
/**This is my title h2 */
export const H2 = (args: TitleProps) => <Title {...args} />;
H2.args = {
  text: "This is my title h2",
  tag: 'h2',
  class: '',
};
/**This is my title h3 */
export const H3 = (args: TitleProps) => <Title {...args} />;
H3.args = {
  text: "This is my title h3",
  tag: 'h3',
  class: '',
};
