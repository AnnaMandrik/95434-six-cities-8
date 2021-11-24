import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import {changeCity, getOffersList} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';
import HeaderPage from '../header-page/header-page';
import LoginForm from '../login-form/login-form';
import {randomCity} from '../../utils/utils';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


function LoginPage(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const snapCity = () => dispatch(changeCity(randomCity)) ;
  const snapOffersOfCity = () => dispatch(getOffersList(randomCity));


  const handleRandomCityClick = () => {
    snapCity();
    snapOffersOfCity();
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <HeaderPage authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleRandomCityClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
