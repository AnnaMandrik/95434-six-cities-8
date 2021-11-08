import {Offer, Comment} from '../types/types';


export const adaptOfferToClient = (offer: any): Offer => {
  const adaptedOffer= Object.assign(
    {},
    offer,
    {
      isPro: offer.is_pro,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image,
    },
  );

  delete adaptedOffer.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};


export const adaptCommentToClient = (comment: any): Comment => {
  const adaptedComent= Object.assign(
    {},
    comment,
    {
      user: {
        isPro: comment.user.is_pro,
      },
    },
  );

  delete adaptedComent.user.is_pro;

  return adaptedComent;
};

