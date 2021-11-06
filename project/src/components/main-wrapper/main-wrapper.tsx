import MainPage from '../main-page/main-page';
import MainEmpty from '../main-empty/main-empty';
import {Offer} from '../../types/types';
import { connect } from 'react-redux';
import { State } from '../../store/reducer';

const mapStateToProps = ({city}: State) => ({selectedCity: city});

export type MainPageProps = {
  offers: Offer[],
  authorizationStatus: string,
  selectedCity: string,
}


function MainWrapper({offers, authorizationStatus, selectedCity}: MainPageProps): JSX.Element {

  const selectedCityOffers = offers.filter((offer) => offer.city.name === selectedCity);
  return selectedCityOffers.length ?
    <MainPage offers={selectedCityOffers} authorizationStatus={authorizationStatus} selectedCity={selectedCity} /> :
    <MainEmpty authorizationStatus={authorizationStatus} selectedCity={selectedCity} />;
}

export default connect(mapStateToProps)(MainWrapper);
