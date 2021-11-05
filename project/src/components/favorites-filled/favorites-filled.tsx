import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import HeaderPage from '../header-page/header-page';
import {Offer} from '../../types/types';
import FavoritesList from '../favorites-list/favorites-list';


type FavoritesFilledProps = {
  offers: Offer[];
}

function FavoritesFilled({offers}: FavoritesFilledProps): JSX.Element {

  const citiesList = [...new Set (offers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <HeaderPage authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) =>
                <FavoritesList offers={offers} city={city} key={city}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesFilled;
