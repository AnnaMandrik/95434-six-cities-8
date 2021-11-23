import {Link} from 'react-router-dom';
import {memo} from 'react';
import {useDispatch} from 'react-redux';
import {getUserEmail} from '../../services/user-email';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';


function NoAuthPage(): JSX.Element {
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function AuthPage(): JSX.Element {

  const dispatch = useDispatch();
  const handleSignInOutClick = () => dispatch(logoutAction());

  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{getUserEmail()}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" onClick={handleSignInOutClick} to={AppRoute.Login}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


function HeaderPage({authorizationStatus}: {authorizationStatus: AuthorizationStatus}): JSX.Element{
  let loginComponent = authorizationStatus === AuthorizationStatus.Auth ? <AuthPage /> : <NoAuthPage />;
  loginComponent = window.location.pathname === AppRoute.Login ? <span></span> : loginComponent;
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {loginComponent}
        </div>
      </div>
    </header>
  );
}

export default memo(HeaderPage, (prev, next) => prev.authorizationStatus === next.authorizationStatus);
