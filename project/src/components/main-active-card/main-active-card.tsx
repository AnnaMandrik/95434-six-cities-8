import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';

type MainActiveCardProps = {
  offer: Offer,
  onOfferSelected?: (offer: Offer | null) => void,
}

const cardInfoStyle = '';
const cardWrapperStyle = 'cities__image-wrapper';
const [cardImageWidth, cardImageHeight] = ['260', '200'];
const styleProps = {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight};


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
      <OfferCard offer={offer} {...styleProps} neighbourId={0} />
    </article>
  );
}

export default MainActiveCard;
