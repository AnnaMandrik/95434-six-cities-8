import {memo}  from 'react';
import {Offer} from '../../types/types';
import MainActiveCard from '../main-active-card/main-active-card';


type OffersListProps = {
  offers: Offer[];
  onActiveOfferSelected?: (offer: Offer | null) => void,
}

function OffersList({offers, onActiveOfferSelected}:OffersListProps):JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <MainActiveCard
          offer={offer}
          key={offer.id}
          onOfferSelected={onActiveOfferSelected}
        />
      ))}

    </>
  );

}

export default memo(OffersList, (prev, next) => prev.offers === next.offers);
