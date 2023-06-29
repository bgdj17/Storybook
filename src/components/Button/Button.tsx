import './Button.css'
export type TButton ={
    type: 'btn-primary' |  'btn-secondary'
    children: React.ReactNode
}
function Button(props: TButton){
    return(
        <button className={props.type}>
            {props.children}
        </button>
    )
}

export default Button