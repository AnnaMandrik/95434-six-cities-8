function Spinner(): JSX.Element {
  return (

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <div className="favorites__status-wrapper">
            <b className="favorites__status">LOADING...</b>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Spinner;
