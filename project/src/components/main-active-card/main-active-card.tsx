import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';
import {TypeOfferCard} from '../../const';

type MainActiveCardProps = {
  offer: Offer,
  onOfferSelected: (offer: Offer) => void,
  onOfferNonSelected: () => void,
}


function MainActiveCard({offer, onOfferSelected, onOfferNonSelected}: MainActiveCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onOfferSelected(offer)}
      onMouseLeave={() => onOfferNonSelected()}
    >
      <OfferCard offer={offer} typeCard={TypeOfferCard.Main}/>
    </article>
  );
}

export default MainActiveCard;
