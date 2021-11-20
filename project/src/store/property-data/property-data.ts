import {ErrorLoadingOkState} from '../../const';
import {Offer, Comment} from '../../types/types';
import {ActionType, Actions} from '../action';

type PropertyData = {
  offer: Offer | null,
  comments: Comment[],
  neighboursOffer: Offer[],
  dataState: ErrorLoadingOkState,
}

const initalState: PropertyData = {
  comments: [],
  offer: null,
  neighboursOffer: [],
  dataState: ErrorLoadingOkState.Loading,
};

const propertyData = (state = initalState, action: Actions): PropertyData => {
  switch (action.type) {
    case ActionType.DataStatus:
      return {...state, dataState: action.payload};
    case ActionType.LoadNeighbours:
      return {...state, neighboursOffer: action.payload};
    case ActionType.LoadOffer:
      return {...state, offer: action.payload};
    case ActionType.LoadComments:
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export {propertyData};
