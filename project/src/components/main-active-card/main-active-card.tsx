import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';
import {TypeOfferCard} from '../../const';

type MainActiveCardProps = {
  offer: Offer,
  onOfferSelected?: (offer: Offer | null) => void,
}


function MainActiveCard({offer, onOfferSelected}: MainActiveCardProps): JSX.Element {

  const handleMouseEnter = () => {
    if (onOfferSelected) {
      onOfferSelected(offer);
    }
  };
  const handleMouseLeave = () => {
    if (onOfferSelected) {
      onOfferSelected(null);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OfferCard offer={offer} typeCard={TypeOfferCard.Main}/>
    </article>
  );
}

export default MainActiveCard;
