import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {COMMENTS} from './mocks/comments';

// const OFFERS_COUNT = 5;
// const offers = new Array(OFFERS_COUNT).fill('').map((element, index) => element = index);

ReactDOM.render(
  <React.StrictMode>
    <App offers={OFFERS} comments={COMMENTS} />
  </React.StrictMode>,
  document.getElementById('root'));
