import {useParams} from 'react-router';
import HeaderPage from '../header-page/header-page';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import OffersList from '../offers-list/offers-list';
import {Offer, Comment} from '../../types/types';
import {AuthorizationStatus, FavoriteBtnProp} from '../../const';
import {createRating} from '../../utils/utils';
import ErrorPage from '../error-page/error-page';
import CommentAddForm from '../comment-add-form/comment-add-form';

function PropertyPicture({src}: {src: string}) {
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio" />
    </div>
  );
}


function FeatureInside({featureName}: {featureName: string}) {
  return <li className="property__inside-item">{featureName}</li>;
}

function Review({commentInfo:{comment, date, rating, user}}: {commentInfo: Comment}) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: createRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={(new Date(date).toDateString())}>{(new Date(date).toLocaleString('en-US', {month: 'long', year: 'numeric'}))}</time>
      </div>
    </li>
  );
}


type PropertyPageProps = {
  offers: Offer[],
  comments: Comment[],
  neighbours: Offer[],
  authorizationStatus: string,
}


function PropertyPage({offers, comments, neighbours, authorizationStatus}: PropertyPageProps): JSX.Element {
  const params: {id: string} = useParams();
  const id = +params.id;

  const exactOffer = offers.find((offer) => offer.id === id);

  if (!exactOffer) {
    return <ErrorPage />;
  }

  const {price, title, rating, type, host, description, maxAdults, bedrooms, goods, images, isFavorite, isPremium} = exactOffer;

  return (
    <div className="page">
      <HeaderPage authorizationStatus={authorizationStatus} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images.map((image) => <PropertyPicture src={image} key={image} />)}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>

                <FavoriteBtn isFavorite={isFavorite}  btn={FavoriteBtnProp.PROPERTY} />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: createRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Badrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} Adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((feature: string) => <FeatureInside featureName={feature} key={feature} />)}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">

                  {comments.map((comment) => <Review commentInfo={comment} key={comment.id} />)}

                </ul>

                {authorizationStatus === AuthorizationStatus.Auth ? <CommentAddForm /> : null}

              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OffersList offers={neighbours}/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;

