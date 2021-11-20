import {ActionType, Actions} from '../action';
import {AuthorizationStatus} from '../../const';

type UserData = {
  authorizationStatus: AuthorizationStatus,
}

const initalState: UserData = {
  authorizationStatus: AuthorizationStatus.NoAuth,
};

const userData = (state = initalState, action: Actions): UserData => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {userData};
