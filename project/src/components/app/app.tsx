import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainWrapper from '../main-wrapper/main-wrapper';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import {Offer, Comment, State} from '../../types/types';
import Spinner from '../spinner/spinner';


type AppPageProps = {
  offers: Offer[],
  comments: Comment[],
  authorizationStatus: AuthorizationStatus,
  isOffersLoaded: boolean,
}

const mapStateToProps = ({loadOffers, authorizationStatus, isOffersLoaded} : State) => ({offers: loadOffers, authorizationStatus, isOffersLoaded});

function App({offers, comments, authorizationStatus, isOffersLoaded}: AppPageProps): JSX.Element {

  if (!isOffersLoaded) {
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
          <PropertyPage offers={offers} comments={comments} authorizationStatus={authorizationStatus} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
