import {useState} from 'react';
import OffersList from '../offers-list/offers-list';
import HeaderPage from '../header-page/header-page';
import Locations from '../locations/locations';
import {Offer} from '../../types/types';
import Map from '../map/map';
import {CitiesCoordinates, AuthorizationStatus} from '../../const';
import SortingForm from '../sorting-form.tsx/sorting-form';


export type MainPageProps = {
  offers: Offer[],
  authorizationStatus: AuthorizationStatus,
  selectedCity: string,
}

function MainPage({offers, authorizationStatus, selectedCity}: MainPageProps): JSX.Element {

  const cityCenterLatLng = CitiesCoordinates[selectedCity.toLowerCase()];

  const [activeOfferCard, setActiveOfferCard] = useState<Offer | null>(null);

  const handleActiveOfferSelect = (offer: Offer | null): void => {
    setActiveOfferCard(offer);
  };

  return (
    <div className="page page--gray page--main">

      <HeaderPage authorizationStatus={authorizationStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {selectedCity}</b>

              <SortingForm />

              <div className="cities__places-list places__list tabs__content">
                <OffersList onActiveOfferSelected={handleActiveOfferSelect} offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityCenterLatLng} offers={offers} activeOfferCard={activeOfferCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
