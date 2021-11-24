import {createReducer} from '@reduxjs/toolkit';
import {ErrorLoadingOkState} from '../../const';
import {Offer, Comment} from '../../types/types';
import {dataStatus, loadNeighbours, loadOffer, loadComments} from '../action';

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

const propertyData = createReducer(initalState, (builder) => {
  builder
    .addCase(dataStatus, (state, action) => {state.dataState = action.payload;})
    .addCase(loadNeighbours, (state, action) => {state.neighboursOffer = action.payload;})
    .addCase(loadOffer, (state, action) => {state.offer = action.payload;})
    .addCase(loadComments, (state, action) => {state.comments = action.payload;});
});

export {propertyData};
