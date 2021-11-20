import {ActionType, Actions} from '../../store/action';
import {Offer} from '../../types/types';

type FavoriteData = {
  favoriteOffers: Offer[],
  isLoadedFavorite: boolean,
}

const initalState: FavoriteData = {
  favoriteOffers: [],
  isLoadedFavorite: false,
};

const favoriteData = (state =initalState, action: Actions): FavoriteData => {
  switch (action.type) {
    case ActionType.LoadFavoriteOffers:
      return {...state, favoriteOffers: action.payload, isLoadedFavorite: true};
    default:
      return state;
  }
};

export {favoriteData};
