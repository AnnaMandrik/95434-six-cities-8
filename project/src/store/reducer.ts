import {CITIES} from '../const';
import {OFFERS} from '../mocks/offers';
import {Offer} from '../types/types';
import {ActionType, Actions} from '../store/action';
import {getOffersByCityName} from '../utils/utils';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];

export type State = {
  city: string,
  offers: Offer[];
}

const initalState = {
  city: initialCity,
  offers: getOffersByCityName(OFFERS, initialCity),
};

const reducer = (state: State = initalState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.GetOffersList:
      return {...state, offers: getOffersByCityName(OFFERS, action.payload)};
    default:
      return state;
  }
};

export {reducer};
