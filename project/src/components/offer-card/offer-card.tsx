import {Link} from 'react-router-dom';
import {Offer} from '../../types/types';
import {createRating} from '../../utils/utils';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import {FavoriteBtnProp, offerTypeToReadable} from '../../const';

const OFFER_WAY = '/offer/';


type OfferCardProps = {
  offer: Offer,
  cardInfoStyle: string,
  cardWrapperStyle: string,
  cardImageWidth: string,
  cardImageHeight: string,
  neighbourId: number,
};

function OfferCard({offer, neighbourId, ...styleProps}: OfferCardProps): JSX.Element {

  const {price, title, previewImage, rating, type, id, isFavorite, isPremium} = offer;
  const {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight} = styleProps;

  return (
    <>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}

      <div className= {`${cardWrapperStyle} place-card__image-wrapper`}>
        <Link to={`${OFFER_WAY}${id}`}>
          <img className="place-card__image" src={previewImage} width={cardImageWidth} height={cardImageHeight} alt="Place" />
        </Link>
      </div>
      <div className={`${cardInfoStyle} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <FavoriteBtn isFavorite={isFavorite} offerId={id} btnFavorite={FavoriteBtnProp.Card} neighbourId={neighbourId}/>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: createRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${OFFER_WAY}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{offerTypeToReadable[type]}</p>
      </div>
    </>
  );
}

export default OfferCard;
