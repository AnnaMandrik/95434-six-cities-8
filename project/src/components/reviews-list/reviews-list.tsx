import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Review from '../review/review';
import {fetchCommentsAction} from '../../store/api-actions';
import {getComments} from '../../store/property-data/selectors';
import {MAX_COUNT_COMMENTS, MIN_COUNT_COMMENTS} from '../../const';


function ReviewsList({offerId}: {offerId: number}): JSX.Element {

  const comments = useSelector(getComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(offerId));
  }, [dispatch, offerId]);

  return(
    <ul className="reviews__list">
      {comments
        .slice()
        .sort((prev, next) => new Date(next.date).getTime() - new Date(prev.date).getTime())
        .slice(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS)
        .map((comment) => <Review commentInfo={comment} key={comment.id} />)}
    </ul>
  );
}

export default ReviewsList;

