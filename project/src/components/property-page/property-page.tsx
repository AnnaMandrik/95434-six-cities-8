import {useParams} from 'react-router';
import {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import HeaderPage from '../header-page/header-page';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import {State, ThunkAppDispatch} from '../../types/types';
import {AuthorizationStatus, FavoriteBtnProp, ErrorLoadingOkState,
  MIX_COUNT_IMG, MAX_COUNT_IMG, offerTypeToReadable} from '../../const';
import {createRating} from '../../utils/utils';
import ErrorPage from '../error-page/error-page';
import CommentAddForm from '../comment-add-form/comment-add-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OfferNeighbour from '../offer-neighbour/offer-neighbour';
import Spinner from '../spinner/spinner';
import {fetchOfferByIdAction} from '../../store/api-actions';


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

const mapStateToProps = ({neighboursOffer, offer, comments, dataState} : State) =>
  ({neighbours: neighboursOffer, offer, comments, dataState});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({loadOffer: fetchOfferByIdAction}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>


function PropertyPage({authorizationStatus, neighbours, offer, comments,  dataState, loadOffer}:{authorizationStatus: AuthorizationStatus} & PropsFromRedux): JSX.Element {


  const params: {id: string} = useParams();
  const id = +params.id;

  useEffect(() => {
    loadOffer(id, true);
  }, [id, loadOffer]);

  if (dataState === ErrorLoadingOkState.Error) {
    return <ErrorPage />;
  }

  if (dataState === ErrorLoadingOkState.Loading || !offer) {
    return <Spinner />;
  }


  const {price, title, rating, type, host, description, maxAdults, bedrooms,
    goods, images, isFavorite, isPremium} = offer;

  const cityCenter = {lat: offer.location.latitude, lng: offer.location.longitude};
  const offersMarkersForMap = [...neighbours, offer];


  return (
    <div className="page">
      <HeaderPage authorizationStatus={authorizationStatus} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images.slice(MIX_COUNT_IMG, MAX_COUNT_IMG).map((image: string) => <PropertyPicture src={image} key={image} />)}

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

                <FavoriteBtn isFavorite={isFavorite} offerId={offer.id} btnFavorite={FavoriteBtnProp.Property} neighbourId={0} />

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
                  {offerTypeToReadable[type]}
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList offerId={offer.id}/>

                {authorizationStatus === AuthorizationStatus.Auth && <CommentAddForm offerId={offer.id} />}

              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={cityCenter} offers={offersMarkersForMap} activeOfferCard={offer} currentOfferCard={offer.id} />
          </section>
        </section>
        <div className="container">
          <OfferNeighbour id={offer.id} neighbourId={offer.id} />
        </div>
      </main>
    </div>
  );
}

export default connector(PropertyPage);

