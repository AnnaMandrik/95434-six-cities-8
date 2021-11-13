import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainWrapper from '../main-wrapper/main-wrapper';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import {Offer, State} from '../../types/types';
import Spinner from '../spinner/spinner';


type AppPageProps = {
  offers: Offer[],
  authorizationStatus: AuthorizationStatus,
  isLoaded: boolean,
}

const mapStateToProps = ({loadOffers, authorizationStatus, isLoaded} : State) => ({offers: loadOffers, authorizationStatus, isLoaded});

function App({offers, authorizationStatus, isLoaded}: AppPageProps): JSX.Element {

  if (!isLoaded) {
    return <Spinner/>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ={AppRoute.Main}>
          <MainWrapper authorizationStatus={authorizationStatus} />
        </Route>
        <Route exact path ={AppRoute.Login}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <PrivateRoute exact path ={AppRoute.Favorites}
            render={() => <FavoritesPage offers={offers} />}
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <Route exact path = {AppRoute.Property}>
          <PropertyPage authorizationStatus={authorizationStatus} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
