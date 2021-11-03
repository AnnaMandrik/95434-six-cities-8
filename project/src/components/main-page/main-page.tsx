import OffersList from '../offers-list/offers-list';
import HeaderPage from '../header-page/header-page';
import Locations from '../locations/locations';
import {Offer} from '../../types/types';
import Map from '../map/map';
import { useState } from 'react';
import {citiesCoordinates} from '../../const';
import {MainPageProps} from '../main-wrapper/main-wrapper';


function MainPage({offers, authorizationStatus, selectedCity}: MainPageProps): JSX.Element {

  const center = citiesCoordinates[selectedCity.toLowerCase()];

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

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                <OffersList handleActiveOfferSelect={handleActiveOfferSelect} offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={center} offers={offers} activeOfferCard={activeOfferCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
