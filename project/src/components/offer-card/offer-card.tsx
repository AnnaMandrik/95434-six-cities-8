import {Link} from 'react-router-dom';
import {Offer} from '../../types/types';
import {createRating} from '../../utils/utils';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import {FavoriteBtnProp, TypeOfferCard} from '../../const';

const OFFER_WAY = '/offer/';


type OfferCardProps = {
  offer: Offer,
  typeCard: string,
};

function OfferCard({offer, typeCard}: OfferCardProps): JSX.Element {

  const {price, title, previewImage, rating, type, id, isFavorite, isPremium} = offer;
  const infoClass = typeCard === TypeOfferCard.Main ? '' : 'favorites__card-info';
  const wrapperClass = typeCard === TypeOfferCard.Main ? 'cities__image-wrapper' : 'favorites__image-wrapper';
  const [width, height] = typeCard === TypeOfferCard.Main ? ['260', '200'] : ['150', '110'];


  return (
    <>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}

      <div className= {`${wrapperClass} place-card__image-wrapper`}>
        <Link to={`${OFFER_WAY}${id}`}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
        </Link>
      </div>
      <div className={`${infoClass} place-card__info`}>
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
