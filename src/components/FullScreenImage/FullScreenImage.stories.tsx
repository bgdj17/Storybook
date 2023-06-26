import { Meta } from "@storybook/react";
import FullScreenImage, {FullImageProps} from "./FullScreenImage";


export default {
  title: "Components/FullScreenImage",
  component: FullScreenImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta;


export const Default = (args: FullImageProps) => <FullScreenImage {...args} />;


Default.args = {
    timeInSeconds: 1
};