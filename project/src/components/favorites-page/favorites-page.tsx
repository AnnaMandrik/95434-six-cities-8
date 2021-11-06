import {Offer} from '../../types/types';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesFilled from '../favorites-filled/favorites-filled';


type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {

  const favorites = offers.filter((offer) => offer.isFavorite);

  return favorites.length ?
    <FavoritesFilled offers={favorites} />
    : <FavoritesEmpty />;
}

export default FavoritesPage;

