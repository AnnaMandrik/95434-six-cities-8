import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import MainWrapper from '../main-wrapper/main-wrapper';
import PropertyPage from '../property-page/property-page';
import ErrorPage from '../error-page/error-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import {getIsLoaded} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


function App(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isLoaded = useSelector(getIsLoaded);

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

export default App;
