import {useDispatch, useSelector} from 'react-redux';
import {MouseEvent, memo} from 'react';
import {changeCity, getOffersList} from '../../store/action';
import {CITIES} from '../../const';
import {getCity} from '../../store/main-data/selectors';


function Location ({city} : {city: string}): JSX.Element {

  const selectedCity = useSelector(getCity);
  const dispatch = useDispatch();
  const snapCity = () => dispatch(changeCity(city));
  const snapOffersOfCity = () => dispatch(getOffersList(city));


  const handleCityOffersClick = (evt: MouseEvent) => {
    evt.preventDefault();
    snapCity();
    snapOffersOfCity();
  };

  return (
    <li className="locations__item">
      <a href='/' onClick={handleCityOffersClick} className={`locations__item-link tabs__item ${city === selectedCity ?
        'tabs__item tabs__item--active' : ''}`}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

function Locations(): JSX.Element {

  const allCities = CITIES.map((city) => <Location city={city} key={city} />);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {allCities}
      </ul>
    </section>
  );
}

export default memo(Locations);
