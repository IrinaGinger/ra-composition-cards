import { ICardProps } from '../../interfaces.tsx';

import './card.css';

export default function Card(props: ICardProps) {

    const { children } = props;
    const { cardWidth = '18rem', title, content, btnText} = props.cardParams;

    return (
        <div className="card" style={{ width: cardWidth }}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#0" className="btn btn-primary">{btnText}</a>
            </div>
        </div>
    );
}