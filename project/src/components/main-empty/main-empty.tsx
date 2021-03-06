import HeaderPage from '../header-page/header-page';
import Locations from '../locations/locations';
import {AuthorizationStatus} from '../../const';

type MainEmptyProps = {
  authorizationStatus: AuthorizationStatus,
  selectedCity: string,
}

function MainEmpty({authorizationStatus, selectedCity}: MainEmptyProps): JSX.Element {
  return(
    <div className="page page--gray page--main">
      <HeaderPage authorizationStatus={authorizationStatus} />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />

        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmpty;
