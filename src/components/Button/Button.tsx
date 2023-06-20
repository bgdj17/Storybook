export type TButton ={
    class?: string
    children: React.ReactNode
}
function Button(props: TButton){
    return(
        <button className={props.class}>
            {props.children}
        </button>
    )
}

export default Button