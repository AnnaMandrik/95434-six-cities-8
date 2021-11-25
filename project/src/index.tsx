import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/app/app';
import {AuthorizationStatus, ErrorLoadingOkState} from './const';
import {rootReducer} from './store/root-reducer';
import {createAPI} from './services/api';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {requireAuthorization, dataStatus} from './store/action';


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
  () => store.dispatch(dataStatus(ErrorLoadingOkState.Error)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
