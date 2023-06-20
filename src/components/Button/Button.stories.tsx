import { Meta } from "@storybook/react";
import Button, {TButton} from "./Button";

export default {
    title: 'Components/Button',
    component: Button
} as Meta

export function Primary(args: TButton) {
    return <Button {...args}>This is a Button!</Button>;
}

Primary.args = {
    class: ''
}