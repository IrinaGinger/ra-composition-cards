import Card from './components/Card/card.tsx';
import ImgCard from './components/ImgCard/imgcard.tsx';

import { IImgParams, ICardParams } from './interfaces.tsx';
import './App.css';

function App() {  
  const imgParams: IImgParams = {
    src: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-1035x780.jpg",
    alt: "cool-cat",
  }
 
  const cardParamsWithImg: ICardParams = { 
    cardWidth: '290px',                               // явно задается ширина карточки 
    title: 'Card title',
    content: `Some quick example text to build on the card title and make up the bulk of the card's content.`, 
    btnText: 'Go somewhere', 
  }

  const cardParams: ICardParams = {                   // будет применена ширина по умолчанию 
    title: 'Special title treatment',
    content: `With supporting text below as a natural lead-in to additional content.`,
    btnText: 'Go somewhere',
  }
  
  return (
    <div className="container">
      <Card cardParams={cardParamsWithImg}>
        <ImgCard src={imgParams.src} alt={imgParams.alt} />
      </Card>
    
      <Card cardParams={cardParams} />
    </div>
  );
}

export default App;
