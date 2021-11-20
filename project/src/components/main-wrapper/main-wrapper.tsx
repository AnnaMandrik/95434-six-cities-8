import {connect} from 'react-redux';
import MainPage from '../main-page/main-page';
import MainEmpty from '../main-empty/main-empty';
import {Offer, State} from '../../types/types';
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({MainData: {city, offers}}: State) => ({selectedCity: city, offers});

export type MainPageProps = {
  offers: Offer[],
  authorizationStatus: AuthorizationStatus,
  selectedCity: string,
}


function MainWrapper({offers, authorizationStatus, selectedCity}: MainPageProps): JSX.Element {

  const selectedCityOffers = offers.filter((offer) => offer.city.name === selectedCity);

  return selectedCityOffers.length ?
    <MainPage offers={selectedCityOffers} authorizationStatus={authorizationStatus} selectedCity={selectedCity} /> :
    <MainEmpty authorizationStatus={authorizationStatus} selectedCity={selectedCity} />;
}

export default connect(mapStateToProps)(MainWrapper);
