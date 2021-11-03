export enum ActionType {
  ChangeCity = 'city/ChangeCity',
  GetOffersList = 'city/GetOffersList',
}

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const getOffersList = (city: string) => ({
  type: ActionType.GetOffersList,
  payload: city,
} as const);


export type Actions = ReturnType<typeof changeCity> | ReturnType<typeof getOffersList>;
