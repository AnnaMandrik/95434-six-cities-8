import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';


type AppPageProps = {
  offers: number[];
}

function App({offers}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ={AppRoute.Main}>
          <MainPage offers={offers} authorizationStatus={AuthorizationStatus.NoAuth} />
        </Route>
        <Route exact path ={AppRoute.Login}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <PrivateRoute exact path ={AppRoute.Favorites}
            render={() => <FavoritesPage offers={offers} authorizationStatus={AuthorizationStatus.NoAuth}/>}
            authorizationStatus={AuthorizationStatus.NoAuth}
          />
        </Route>
        <Route exact path = {AppRoute.Property}>
          <PropertyPage offers={offers} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
