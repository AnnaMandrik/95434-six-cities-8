import {Link} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router';
import {changeCity, getOffersList} from '../../store/action';
import {State} from '../../types/types';
import {AppRoute, AuthorizationStatus} from '../../const';
import HeaderPage from '../header-page/header-page';
import LoginForm from '../login-form/login-form';
import {randomCity} from '../../utils/utils';


const mapStateToProps = ({UserData} : State) => ({authorizationStatus: UserData.authorizationStatus});
const mapDispatchToProps = (dispatch: Dispatch ) => bindActionCreators({onClickCity: changeCity, onClickCityOffers: getOffersList}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function LoginPage({onClickCity, onClickCityOffers, authorizationStatus}: PropsFromRedux): JSX.Element {

  const handleRandomCityClick = () => {
    onClickCity(randomCity);
    onClickCityOffers(randomCity);
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <HeaderPage />
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

export default connector(LoginPage);
