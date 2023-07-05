import './Button.scss'

export type ButtonProps ={
    type: 'primary' | 'secondary'
    children: React.ReactNode
    classButton?: string 
}

function Button(props: ButtonProps){
    return(
        <button className={`btn ${props.type} ${props.classButton}`}>
            {props.children}
        </button>
    )
}

export default Button