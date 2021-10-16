import OfferCard from '../offer-card/offer-card';
import { TypeOfferCard } from '../../const';
import {Offer} from '../../types/types';


function FavoriteCard({offer}: {offer: Offer}): JSX.Element {
  return(
    <article className="favorites__card place-card">
      <OfferCard offer={offer} typeCard={TypeOfferCard.Favorite} />
    </article>
  );
}

export default FavoriteCard;
