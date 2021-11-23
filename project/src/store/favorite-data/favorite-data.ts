import {createReducer} from '@reduxjs/toolkit';
import {loadFavoriteOffers} from '../action';
import {Offer} from '../../types/types';

type FavoriteData = {
  favoriteOffers: Offer[],
  isLoadedFavorite: boolean,
}

const initalState: FavoriteData = {
  favoriteOffers: [],
  isLoadedFavorite: false,
};


const favoriteData =  createReducer(initalState, (builder) => {
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isLoadedFavorite = true;
  });
});

export {favoriteData};
