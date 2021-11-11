import {Offer} from '../types/types';
import {PlacesSortOptions, ReviewTextLength} from '../const';

const RATING_COEFF = 100/5;   //100% на 5 звезд

const createRating = (rating: number): string => `${Math.round(rating) * RATING_COEFF}%`;

const blockedReviewSubmit = (star: string, text: string): boolean => {
  const length = text.length;
  return !(star && length <= ReviewTextLength.MAX && length >= ReviewTextLength.MIN);
};


const getOffersByCityName = (offers: Offer[], city: string): Offer[] =>
  offers.filter((offer) => offer.city.name === city);

const sortHighPrice = (offers: Offer[]) => ([...offers].sort((a, b) => b.price - a.price));
const sortLowPrice = (offers: Offer[]) => ([...offers].sort((a, b) => a.price - b.price));
const sortHighRated = (offers: Offer[]) => ([...offers].sort((a, b) => b.rating - a.rating));

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

const Re = {
  NUMBER: /\d/,
  LETTER: /[a-zа-я]/i,
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const checkPassword = (password: string | undefined | null): boolean =>
  password !== null && password !== undefined && Re.NUMBER.test(password) && Re.LETTER.test(password);

const checkEmail = (email: string): boolean => Re.EMAIL.test(String(email).toLowerCase());
const disableSignInSubmit = (email: string, password: string): boolean => !checkEmail(email) || !checkPassword(password);


export {checkEmail, checkPassword, disableSignInSubmit, blockedReviewSubmit, createSortingOffers, createRating, getOffersByCityName};
