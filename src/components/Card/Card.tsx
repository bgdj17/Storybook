import './Card.scss'

export type CardProps = {
    title: React.ReactNode,
    description: React.ReactNode,
    img: string,
    classCard?: string
}

export default function Card(props: CardProps) {
    return (
        <div className="container">
            <div className="card">
                <img src={props.img} alt="" />
                <div className="intro">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
} 