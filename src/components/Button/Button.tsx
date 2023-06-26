export type ButtonProps ={
    class?: string
    children: React.ReactNode
}
function Button(props: ButtonProps){
    return(
        <button className={props.class}>
            {props.children}
        </button>
    )
}

export default Button