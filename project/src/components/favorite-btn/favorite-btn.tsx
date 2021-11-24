import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {AppRoute, AuthorizationStatus, OffersButtonType} from '../../const';
import {postFavoriteStatus} from '../../store/api-actions';
import {ButtonFavorite} from '../../types/types';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

type FavoriteBtnProps = {
  isFavorite: boolean,
  btnFavorite: ButtonFavorite,
  offerId: number,
}

function FavoriteBtn({isFavorite, btnFavorite, offerId}: FavoriteBtnProps): JSX.Element {

  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const propertyId = btnFavorite.type === OffersButtonType.Property ? offerId : 0;
  const status = isFavorite ? 0 : 1;
  const changeStatus = () => dispatch(postFavoriteStatus(offerId, status, propertyId));

  const handleChangeFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return history.push(AppRoute.Login);
    }
    changeStatus();
  };

  const activeClass = isFavorite ? `${btnFavorite.className}__bookmark-button--active` : '';

  return(
    <button className={`${btnFavorite.className}__bookmark-button ${activeClass}
    button`} type="button" onClick={handleChangeFavoriteStatus}
    >
      <svg className={`${btnFavorite.className}__bookmark-icon`} width={btnFavorite.width} height={btnFavorite.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteBtn;
