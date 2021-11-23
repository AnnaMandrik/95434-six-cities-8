import {createReducer} from '@reduxjs/toolkit';
import {CITIES, PlacesSortOptions} from '../../const';
import {Offer} from '../../types/types';
import {changeCity, getOffersList, changeOptionSorting, loadOffers} from '../../store/action';
import {getOffersByCityName, createSortingOffers} from '../../utils/utils';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];

type MainData = {
  city: string,
  offers: Offer[],
  activeOption: string,
  loadOffers: Offer[],
  isLoaded: boolean,
  mainOffers: Offer[],
}

const initalState: MainData = {
  city: initialCity,
  offers: getOffersByCityName([], initialCity),
  activeOption: PlacesSortOptions.Popular,
  loadOffers: [],
  isLoaded: false,
  mainOffers: [],
};

const mainData = createReducer (initalState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {state.city = action.payload;})
    .addCase(getOffersList, (state, action) => {
      state.mainOffers = getOffersByCityName(state.loadOffers, action.payload);
      state.offers = getOffersByCityName(state.loadOffers, action.payload);
    })
    .addCase(changeOptionSorting, (state, action) => {
      state.activeOption = action.payload;
      state.offers = createSortingOffers(state.mainOffers, action.payload);
    })
    .addCase(loadOffers, (state, action) => {
      state.loadOffers = action.payload;
      state.isLoaded = true;
    });
});

export {mainData};

