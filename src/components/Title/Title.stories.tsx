
import { Meta } from "@storybook/react";
import Title, {TitleProps}from "./Title";

export default {
    title: "Components/Title",
    component: Title,
    argTypes:{
        tag:{
            control: {type: 'radio'},
            options: ['h1', 'h2','h3'],
            description: "Specify the tag HTML"
        }
    },
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      }
}as Meta

/**This is my title h1 */
export const H1 = (args: TitleProps) => {
   return <Title {...args}></Title>
}
H1.args = {
    text : "this is a title!",
    tag: 'h1',
    class: ''
}

/**This is my title h2 */
export const H2 = (args: TitleProps) => {
    return <Title {...args}></Title>
 }
 H2.args = {
     text : "this is a title!",
     tag: 'h2',
     class: ''
 }
 
 /**This is my title h3 */
 export const H3 = (args: TitleProps) => {
    return <Title {...args}></Title>
 }
 H3.args = {
     text : "this is a title!",
     tag: 'h3',
     class: ''
 }
