import {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import OfferRoomCard from '../offer-room-card/offer-room-card';
import {fetchNeighborsOffersAction} from '../../store/api-actions';
import {State, ThunkAppDispatch} from '../../types/types';


const mapStateToProps = ({neighboursOffer, favoriteOffers} : State) => ({neighbours: neighboursOffer, favoriteOffers});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({getNeighbours: fetchNeighborsOffersAction}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

function OfferNeighbour ({id, neighbours, neighbourId, favoriteOffers,getNeighbours} : {id: number, neighbourId: number} & PropsFromRedux): JSX.Element {

  useEffect(() => {
    getNeighbours(id);
  }, [id, getNeighbours, favoriteOffers]);

  const neighbourOffer = neighbours.map((neighbour) => <OfferRoomCard offer={neighbour} key={neighbour.id} neighbourId={neighbourId} />);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {neighbourOffer}

      </div>
    </section>
  );
}

export default connector(OfferNeighbour);
