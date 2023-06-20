import React from "react"

export type TTitle = {
    tag: 'h1' | 'h2' | 'h3'
    text: string
    class?: string
}
export default function Title(props: TTitle) {
    const Title = React.createElement(
        props.tag, {
            className: props.class
        }, props.text
    )
    return Title
}
