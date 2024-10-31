export interface ICardParams {
    cardWidth?: string,
    title: string,
    content: string,
    btnText: string,
}

export interface ICardProps {
    cardParams: ICardParams,
    children?: React.ReactNode; 
}

export interface IImgParams {
    src: string,
    alt: string,
}