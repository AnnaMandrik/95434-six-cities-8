import {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State, ThunkAppDispatch} from '../../types/types';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import Spinner from '../spinner/spinner';


const mapStateToProps = ({favoriteOffers, isLoadedFavorite, authorizationStatus} : State) => ({favoriteOffers, isLoadedFavorite});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({loadFavoriteOffers: fetchFavoriteOffersAction}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesPage({favoriteOffers, isLoadedFavorite, loadFavoriteOffers}: PropsFromRedux): JSX.Element {

  useEffect(() => {
    loadFavoriteOffers();
  }, [loadFavoriteOffers]);

  if (!isLoadedFavorite) {
    return <Spinner />;
  }

  return favoriteOffers.length ?
    <FavoritesFilled offers={favoriteOffers} />
    : <FavoritesEmpty />;
}

export default connector(FavoritesPage);

