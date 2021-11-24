import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesFilled from '../favorites-filled/favorites-filled';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import {getFavoriteOffers, getIsLoadedFavorite} from '../../store/favorite-data/selectors';


function FavoritesPage(): JSX.Element {

  const favoriteOffers = useSelector(getFavoriteOffers);
  const isLoadedFavorite = useSelector(getIsLoadedFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  if (!isLoadedFavorite) {
    return <Spinner />;
  }

  return favoriteOffers.length ?
    <FavoritesFilled offers={favoriteOffers} />
    : <FavoritesEmpty />;
}

export default FavoritesPage;

