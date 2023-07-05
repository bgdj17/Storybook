import { Meta } from "@storybook/react";
import images from "../../assets/images/images"
import Card, {CardProps} from "./Card";

export default {
    title: 'Components/Card',
    component: Card,
    // tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      }
} as Meta

export function Default(args: CardProps) {
    return (<div style={{display: 'flex'}}>
        <Card {...args}></Card>
        <Card {...args} img={images[6]}></Card>
    </div>
    )
}

Default.args = {
    description: 'Belonging to the Rosaceae family and the Rosa genus, red roses are grown worldwide for their beauty and fragrance.',
    title: 'Red Rose',
    img: images[2]
}

