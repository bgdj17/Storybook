import { Meta } from "@storybook/react";
import Button, {TButton} from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      }
} as Meta

export function Primary(args: TButton) {
    return <Button {...args}>This is a Button!</Button>;
}

Primary.args = {
    type: 'btn-primary'
}

export function Secondary(args: TButton) {
    return <Button {...args}>This is a Button!</Button>;
}
Secondary.args={
    class: 'btn-secondary',
}