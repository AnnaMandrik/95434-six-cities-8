import {Offer} from '../types/types';
import {PlacesSortOptions} from '../const';

const RATING_COEFF = 100/5;   //100% на 5 звезд

const createRating = (rating: number): string => `${Math.round(rating) * RATING_COEFF}%`;

const getOffersByCityName = (offers: Offer[], city: string): Offer[] =>
  offers.filter((offer) => offer.city.name === city);

const sortHighPrice = (offers: Offer[]) => ([...offers.sort((a, b) => b.price - a.price)]);
const sortLowPrice = (offers: Offer[]) => ([...offers.sort((a, b) => a.price - b.price)]);
const sortHighRated = (offers: Offer[]) => ([...offers.sort((a, b) => b.rating - a.rating)]);

const createSortingOffers = (offers: Offer[], option: string): Offer[] => {
  switch (option) {
    case PlacesSortOptions.PriceHightToLow:
      return sortHighPrice(offers);
    case PlacesSortOptions.PriceLowToHight:
      return sortLowPrice(offers);
    case PlacesSortOptions.TopRated:
      return sortHighRated(offers);
    default:
      return [...offers];
  }
};


export {createSortingOffers, createRating, getOffersByCityName};
