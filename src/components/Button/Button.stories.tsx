import { Meta } from "@storybook/react";
import Button, {ButtonProps} from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
} as Meta

export function Primary(args: ButtonProps) {
    return <Button {...args}>This is a Button!</Button>;
}

Primary.args = {
    class: ''
}