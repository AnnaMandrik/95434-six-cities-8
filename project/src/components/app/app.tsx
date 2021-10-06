import MainPage from '../main-page/main-page';
//import PropertyPage from '../property-page/property-page';
//import ErrorPage from '../error-page/error-page';


type AppPageProps = {
  offers: number[];
}

function App({offers}: AppPageProps): JSX.Element {
  return (
    <MainPage offers={offers}/>
    // <ErrorPage />
  );
}

export default App;
