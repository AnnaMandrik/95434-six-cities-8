import {Offer} from '../types/types';

const RATING_COEFF = 100/5;   //100% на 5 звезд

const createRating = (rating: number): string => `${Math.round(rating) * RATING_COEFF}%`;

const getOffersByCityName = (offers: Offer[], city: string): Offer[] =>
  offers.filter((offer) => offer.city.name === city);

export {createRating, getOffersByCityName};
