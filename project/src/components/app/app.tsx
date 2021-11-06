import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainWrapper from '../main-wrapper/main-wrapper';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import {Offer, Comment} from '../../types/types';


type AppPageProps = {
  offers: Offer[],
  comments: Comment[],
  authorizationStatus: AuthorizationStatus,
}

function App({offers, comments, authorizationStatus}: AppPageProps): JSX.Element {
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

export default App;
