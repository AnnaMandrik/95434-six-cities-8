const RATING_COEFF = 100/5;   //100% на 5 звезд

const createRating = (rating: number): string => `${Math.round(rating) * RATING_COEFF}%`;

export {createRating};
