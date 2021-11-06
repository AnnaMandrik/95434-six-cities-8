export enum ActionType {
  ChangeCity = 'city/ChangeCity',
  GetOffersList = 'offer/GetOffersList',
  ChangeCityAndOffers = 'city-offer/ChangeCityAndOffers',
  ChangeOptionSorting = 'option-sorting/ChangeOptionSorting',
}

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const getOffersList = (city: string) => ({
  type: ActionType.GetOffersList,
  payload: city,
} as const);

export const changeCityAndOffers = (city: string) => ({
  type: ActionType.ChangeCityAndOffers,
  payload: city,
} as const);

export const changeOptionSorting = (option: string) => ({
  type: ActionType.ChangeOptionSorting,
  payload: option,
} as const);


export type Actions =
ReturnType<typeof changeCity> |
ReturnType<typeof getOffersList> |
ReturnType<typeof changeCityAndOffers> |
ReturnType<typeof changeOptionSorting>;
