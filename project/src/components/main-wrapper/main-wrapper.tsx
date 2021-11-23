import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import MainEmpty from '../main-empty/main-empty';
import {AuthorizationStatus} from '../../const';
import {getCity, getOffers} from '../../store/main-data/selectors';


function MainWrapper({authorizationStatus}: {authorizationStatus: AuthorizationStatus}): JSX.Element {

  const offers = useSelector(getOffers);
  const selectedCity = useSelector(getCity);

  return offers.length ?
    <MainPage offers={offers} authorizationStatus={authorizationStatus} selectedCity={selectedCity} /> :
    <MainEmpty authorizationStatus={authorizationStatus} selectedCity={selectedCity} />;
}

export default MainWrapper;
