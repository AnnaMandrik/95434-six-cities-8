import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ErrorPage(): JSX.Element {
  return (

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404. Page not found</b>
            <Link className="favorites__status-description" to={AppRoute.Main}>Return to the main page</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ErrorPage;
