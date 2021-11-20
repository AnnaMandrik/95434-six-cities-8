import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { MouseEvent } from 'react';
import { State } from '../../types/types';
import {changeCity, getOffersList} from '../../store/action';
import {CITIES} from '../../const';


const ACTIVE = 'tabs__item tabs__item--active';

const mapStateToProps = ({MainData} : State) => ({selectedCity: MainData.city});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onClickCity: changeCity, onClickCityOffers: getOffersList}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Location ({city, selectedCity, onClickCity, onClickCityOffers} : {city: string} & PropsFromRedux): JSX.Element {

  const onClick = (evt: MouseEvent) => {
    evt.preventDefault();
    onClickCity(city);
    onClickCityOffers(city);
  };

  return (
    <li className="locations__item">
      <a href='/' onClick={onClick} className={`locations__item-link tabs__item ${city === selectedCity ? ACTIVE : ''}`}>
        <span>{city}</span>
      </a>
    </li>
  );
}

const LocationPropsFromRedux = connector(Location);
function Locations(): JSX.Element {

  const allCities = CITIES.map((city) => <LocationPropsFromRedux city={city} key={city} />);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {allCities}
      </ul>
    </section>
  );
}

export default Locations;
