import {Comment} from '../../types/types';
import Review from '../review/review';

function ReviewsList({comments}: {comments: Comment[]}): JSX.Element {
  return(
    <ul className="reviews__list">
      {comments.map((comment) => <Review commentInfo={comment} key={comment.id} />)}
    </ul>
  );
}

export default ReviewsList;

