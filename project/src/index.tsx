import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import {OFFERS} from './mocks/offers';
import {COMMENTS} from './mocks/comments';
import {AuthorizationStatus} from './const';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {ThunkAppDispatch, fetchOffersAction} from './store/api-actions';
import {loadOffers, requireLogout} from './store/action';


const api = createAPI(() => store.dispatch(requireLogout()));
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());
store.dispatch(loadOffers(store.getState().loadOffers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={COMMENTS}
        authorizationStatus={AuthorizationStatus.Auth}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
