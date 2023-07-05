import React from "react"

export type TitleProps = {
    tag: 'h1' | 'h2' | 'h3'
    text: React.ReactNode
    class?: string
}

export default function Title(props: TitleProps) {
    const Title = React.createElement(
        props.tag, {
            className: props.class
        }, props.text
    )
    return Title
}
