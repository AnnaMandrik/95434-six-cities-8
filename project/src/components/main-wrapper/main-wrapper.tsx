import { connect } from 'react-redux';
import MainPage from '../main-page/main-page';
import MainEmpty from '../main-empty/main-empty';
import {Offer} from '../../types/types';
import {State} from '../../types/types';
import Spinner from '../spinner/spinner';

const mapStateToProps = ({city, offers, isOffersLoaded}: State) => ({selectedCity: city, offers, isOffersLoaded});

export type MainPageProps = {
  offers: Offer[],
  authorizationStatus: string,
  selectedCity: string,
}


function MainWrapper({offers, authorizationStatus, selectedCity, isOffersLoaded}: MainPageProps & {isOffersLoaded: boolean}): JSX.Element {

  if (!isOffersLoaded) {
    return <Spinner/>;
  }
  const selectedCityOffers = offers.filter((offer) => offer.city.name === selectedCity);
  return selectedCityOffers.length ?
    <MainPage offers={selectedCityOffers} authorizationStatus={authorizationStatus} selectedCity={selectedCity} /> :
    <MainEmpty authorizationStatus={authorizationStatus} selectedCity={selectedCity} />;
}

export default connect(mapStateToProps)(MainWrapper);
