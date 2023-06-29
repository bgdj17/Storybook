import { Meta } from "@storybook/react";
import Slider from "./Slider";

export default {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
      }
} as Meta

export function Default() {
    return <Slider ></Slider>;
}



