import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';
import {Offer} from '../../types/types';
import { bindActionCreators, Dispatch } from 'redux';
import {changeCity, getOffersList} from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { MouseEvent } from 'react';


type FavoritesListProps = {
  offers: Offer[],
  city: string,
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({onClickCity: changeCity, getOffersList}, dispatch);
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function FavoritesList({offers, city, onClickCity}: FavoritesListProps & PropsFromRedux): JSX.Element {

  const onClick = (evt: MouseEvent) => {
    evt.preventDefault();
    onClickCity(city);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" onClick={onClick} to={AppRoute.Main}>
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

export default connector(FavoritesList);
