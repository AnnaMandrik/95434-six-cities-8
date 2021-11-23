import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';

const cardInfoStyle = 'favorites__card-info';
const cardWrapperStyle ='favorites__image-wrapper';
const [cardImageWidth, cardImageHeight] = ['150', '110'];
const styleProps = {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight};

function FavoriteCard({offer}: {offer: Offer}): JSX.Element {
  return(
    <article className="favorites__card place-card">
      <OfferCard offer={offer} {...styleProps} />
    </article>
  );
}

export default FavoriteCard;
