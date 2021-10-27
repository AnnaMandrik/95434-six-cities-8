import {Link} from 'react-router-dom';
import {Offer} from '../../types/types';
import {createRating} from '../../utils/utils';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import {FavoriteBtnProp} from '../../const';

const OFFER_WAY = '/offer/';


type OfferCardProps = {
  offer: Offer,
  cardInfoStyle: string,
  cardWrapperStyle: string,
  cardImageWidth: string,
  cardImageHeight: string,
};

function OfferCard({offer, ...styleProps}: OfferCardProps): JSX.Element {

  const {price, title, previewImage, rating, type, id, isFavorite, isPremium} = offer;
  const {cardInfoStyle, cardWrapperStyle, cardImageWidth, cardImageHeight} = styleProps;
  // const cardInfoStyle = typeCard === TypeOfferCard.Main ? '' : 'favorites__card-info';
  // const cardWrapperStyle = typeCard === TypeOfferCard.Main ? 'cities__image-wrapper' : 'favorites__image-wrapper';
  // const [cardImageWidth, cardImageHeight] = typeCard === TypeOfferCard.Main ? ['260', '200'] : ['150', '110'];


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

          <FavoriteBtn isFavorite={isFavorite} btn={FavoriteBtnProp.CARD}/>

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
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default OfferCard;
