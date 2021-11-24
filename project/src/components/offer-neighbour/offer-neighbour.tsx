import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import OfferRoomCard from '../offer-room-card/offer-room-card';
import {fetchNeighborsOffersAction} from '../../store/api-actions';
import {getNeighboursOffer} from '../../store/property-data/selectors';


function OfferNeighbour({id} : {id: number}): JSX.Element {

  const neighbours = useSelector(getNeighboursOffer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNeighborsOffersAction(id));
  }, [id, dispatch]);

  const neighbourOffer = neighbours.map((neighbour) => <OfferRoomCard offer={neighbour} key={neighbour.id} />);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {neighbourOffer}

      </div>
    </section>
  );
}

export default OfferNeighbour;
