import {NameDataList} from '../root-reducer';
import {State, Offer} from '../../types/types';

const nowState = NameDataList.FavoriteData;

export const getFavoriteOffers = (state: State): Offer[] => state[nowState].favoriteOffers;
export const getIsLoadedFavorite = (state: State): boolean => state[nowState].isLoadedFavorite;
