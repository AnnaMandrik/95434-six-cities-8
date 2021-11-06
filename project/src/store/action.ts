export enum ActionType {
  ChangeCity = 'city/ChangeCity',
  GetOffersList = 'offer/GetOffersList',
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

export const changeOptionSorting = (option: string) => ({
  type: ActionType.ChangeOptionSorting,
  payload: option,
} as const);


export type Actions = ReturnType<typeof changeCity> |
ReturnType<typeof getOffersList> |
ReturnType<typeof changeOptionSorting>;
