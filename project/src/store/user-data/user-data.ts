import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout} from '../action';
import {AuthorizationStatus} from '../../const';

type UserData = {
  authorizationStatus: AuthorizationStatus,
}

const initalState: UserData = {
  authorizationStatus: AuthorizationStatus.NoAuth,
};

const userData = createReducer(initalState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {state.authorizationStatus = action.payload;})
    .addCase(requireLogout, (state) => {state.authorizationStatus = AuthorizationStatus.NoAuth;});
});

export {userData};

