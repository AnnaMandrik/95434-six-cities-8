import {NameDataList} from '../root-reducer';
import {State, Offer} from '../../types/types';

const nowState = NameDataList.MainData;

export const getCity = (state: State): string => state[nowState].city;
export const getOffers = (state: State): Offer[] => state[nowState].offers;
export const getActiveOption = (state: State): string => state[nowState].activeOption;
export const getIsLoaded = (state: State): boolean => state[nowState].isLoaded;

