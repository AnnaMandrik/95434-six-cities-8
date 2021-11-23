import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {MouseEvent} from 'react';
import {AppRoute} from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';
import {Offer} from '../../types/types';
import {changeCity, getOffersList} from '../../store/action';


type FavoritesListProps = {
  offers: Offer[],
  city: string,
}


function FavoritesList({offers, city}: FavoritesListProps): JSX.Element {

  const dispatch = useDispatch();
  const snapCity = () => dispatch(changeCity(city));
  const snapOffersOfCity = () => dispatch(getOffersList(city));

  const handleCityOffersClick = (evt: MouseEvent) => {
    evt.preventDefault();
    snapCity();
    snapOffersOfCity();
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" onClick={handleCityOffersClick} to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">

        {offers.filter((offer) => offer.city.name === city).map((offer) =>
          <FavoriteCard offer={offer} key={offer.id}/>)}

      </div>
    </li>
  );
}

export default FavoritesList;
