import { Meta } from "@storybook/react";
import Button, {ButtonProps} from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      }
} as Meta

/**This is a Button Primary */
export function Primary(args: ButtonProps) {
    return <Button {...args}></Button>;
}

Primary.args = {
    type: 'primary',
    classButton: '',
    children: 'Button primary!'
  
}

export function Secondary(args: ButtonProps) {
    return <Button {...args}></Button>;
}
Secondary.args={
    type: 'secondary',
    classButton: '',
    children: 'Button secondary!'

}