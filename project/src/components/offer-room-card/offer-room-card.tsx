import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';


const cardInfoStyle = '';
const cardWrapperStyle = 'cities__image-wrapper';
const [cardImageWidth, cardImageHeight] = ['260', '200'];
const styleProps = {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight};


function OfferRoomCard({offer}: {offer: Offer}): JSX.Element {

  return (
    <article className="cities__place-card place-card">
      <OfferCard offer={offer} {...styleProps}/>
    </article>
  );
}

export default OfferRoomCard;
