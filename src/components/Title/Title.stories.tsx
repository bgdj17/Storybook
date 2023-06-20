
import { Meta } from "@storybook/react";
import Title, {TTitle}from "./Title";

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
    parameters: {
        layout: 'centered',
        docs: {
        
        }
      }
}as Meta

export const H1 = (args: TTitle) => {
   return <Title {...args}></Title>
}
H1.args = {
    text : "this is a title!",
    tag: 'h1',
    class: ''
}
export const H2 = (args: TTitle) => {
    return <Title {...args}></Title>
 }
 H2.args = {
     text : "this is a title!",
     tag: 'h2',
     class: ''
 }
 export const H3 = (args: TTitle) => {
    return <Title {...args}></Title>
 }
 H3.args = {
     text : "this is a title!",
     tag: 'h3',
     class: ''
 }
