function ErrorPage(): JSX.Element {
  return (

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404. Page not found</b>
            <p className="favorites__status-description">Please, click to go to main page</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ErrorPage;
