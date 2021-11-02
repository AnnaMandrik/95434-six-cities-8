import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {COMMENTS} from './mocks/comments';
import {AuthorizationStatus, CITIES} from './const';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={OFFERS} comments={COMMENTS} authorizationStatus={AuthorizationStatus.Auth} city={CITIES[3]} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
