import {NameDataList} from '../root-reducer';
import {State} from '../../types/types';
import {AuthorizationStatus} from '../../const';

const nowState = NameDataList.UserData;

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[nowState].authorizationStatus;

