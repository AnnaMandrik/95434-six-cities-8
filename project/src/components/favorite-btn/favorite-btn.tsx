import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {AppRoute, AuthorizationStatus, OffersButtonType} from '../../const';
import {postFavoriteStatus} from '../../store/api-actions';
import {ButtonFavorite, ThunkAppDispatch, State} from '../../types/types';

type FavoriteBtnProps = {
  isFavorite: boolean,
  btnFavorite: ButtonFavorite,
  offerId: number
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({changeStatus: postFavoriteStatus}, dispatch);
const mapStateToProps = ({authorizationStatus}: State) => ({authorizationStatus});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoriteBtn({isFavorite, btnFavorite, authorizationStatus, offerId, changeStatus, neighbourId = 0}: FavoriteBtnProps & PropsFromRedux & {neighbourId: number}): JSX.Element {

  const history = useHistory();

  const handleChangeFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return history.push(AppRoute.Login);
    }

    const propertyId = btnFavorite.type === OffersButtonType.Property ? offerId : 0;
    const status = isFavorite ? 0 : 1;
    changeStatus(offerId, status, propertyId || neighbourId);
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

export default connector(FavoriteBtn);
