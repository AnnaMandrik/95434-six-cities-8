import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';
import HeaderPage from '../header-page/header-page';
import {Offer} from '../../types/types';
//import {FavoritesEmpty} from '../favorites-empty/favorites-empty';


type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <HeaderPage authorizationStatus={AuthorizationStatus.Auth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Main}>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">

                  {offers.filter((offer) => offer.city.name === 'Amsterdam').map((offer) => <FavoriteCard offer={offer} key={offer.id}/>)}

                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.Main}>
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === 'Cologne').map((offer) => <FavoriteCard offer={offer} key={offer.id}/>)}
                </div>
              </li>
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

export default FavoritesPage;
