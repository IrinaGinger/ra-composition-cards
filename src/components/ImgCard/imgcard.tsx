import { IImgParams } from '../../interfaces.tsx';

import './imgcard.css'; 

export default function ImgCard(props: IImgParams) {

    const { src, alt } = props;

    return (
        <div className="img-container">
            <img
                className="card-img-top"
                src={src}
                alt={alt}
            />
        </div>
    );
}