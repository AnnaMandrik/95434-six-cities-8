import {NameDataList} from '../root-reducer';
import {State, Offer, Comment} from '../../types/types';
import {ErrorLoadingOkState} from '../../const';

const nowState = NameDataList.PropertyData;

export const getComments = (state: State): Comment[] => state[nowState].comments;
export const getOffer = (state: State): Offer | null => state[nowState].offer;
export const getNeighboursOffer = (state: State): Offer[] => state[nowState].neighboursOffer;
export const getDataState = (state: State): ErrorLoadingOkState => state[nowState].dataState;
