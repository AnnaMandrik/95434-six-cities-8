import {useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import {Offer, ThunkAppDispatch} from '../../types/types';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import {fetchFavoriteOffersAction} from '../../store/api-actions';

const mapStateToProps = ({favoriteOffers} : {favoriteOffers: Offer[]}) => ({favoriteOffers});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({loadFavoriteOffers: fetchFavoriteOffersAction}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesPage({favoriteOffers, loadFavoriteOffers}: PropsFromRedux): JSX.Element {

  useEffect(() => {
    loadFavoriteOffers();
  });

  return favoriteOffers.length ?
    <FavoritesFilled offers={favoriteOffers} />
    : <FavoritesEmpty />;
}

export default connector(FavoritesPage);

