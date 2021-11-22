import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainWrapper from '../main-wrapper/main-wrapper';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import {State} from '../../types/types';
import Spinner from '../spinner/spinner';
import {getIsLoaded} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


type AppPageProps = {
  authorizationStatus: AuthorizationStatus,
  isLoaded: boolean,
}

const mapStateToProps = (state: State) => ({isLoaded: getIsLoaded(state), authorizationStatus: getAuthorizationStatus(state)});

function App({authorizationStatus, isLoaded}: AppPageProps): JSX.Element {

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
            render={() => <FavoritesPage />}
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
