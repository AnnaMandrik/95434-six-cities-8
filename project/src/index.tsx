import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
// import {OFFERS} from './mocks/offers';
import {COMMENTS} from './mocks/comments';
import {AuthorizationStatus} from './const';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {requireAuthorization} from './store/action';
import {ThunkAppDispatch} from './types/types';


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());
(store.dispatch as ThunkAppDispatch)(checkAuthAction());
// store.dispatch(loadOffers(store.getState().loadOffers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={COMMENTS} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
