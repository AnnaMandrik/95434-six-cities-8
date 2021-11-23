import {ChangeEvent, FormEvent, useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {blockedReviewLengthSubmit} from '../../utils/utils';
import {postCommentAction} from '../../store/api-actions';
import CommentAddStars from '../comment-add-stars/comment-add-stars';
import CommentAddText from '../comment-add-text/comment-add-text';
import {TIME_ERROR} from '../../const';


function CommentAddForm({offerId}: {offerId: number}): JSX.Element {

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isError, setError] = useState(false);
  const [isBlocked, setBlock] = useState(false);

  const blockedState = blockedReviewLengthSubmit(rating, review);

  const unblockForm = () => {
    setBlock(false);
  };

  const clearComment = () => {
    setReview('');
    setRating(0);
  };

  const notifyError = () => {
    setError(true);
    setTimeout(() => setError(false), TIME_ERROR);
  };

  const dispatch = useDispatch();
  const postComment = () => dispatch(postCommentAction({offerId, review, rating, clearComment, notifyError, unblockForm}));

  const handleSubmit=(evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBlock(true);
    postComment();
  };

  const handleTextInput = useCallback( (evt: ChangeEvent<HTMLTextAreaElement>) =>  setReview(evt.target.value), [] ) ;
  const handleStarClick = useCallback( (evt: ChangeEvent<HTMLInputElement>) => setRating(+evt.currentTarget.value), [] );


  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentAddStars onChange={handleStarClick} disabled={isBlocked} rating={rating}/>
      <CommentAddText onChange={handleTextInput} disabled={isBlocked} value={review} />
      {isError && <span style={{color: 'red', fontWeight: 'normal'}}>Something wrong! Try again later</span>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={blockedState || isBlocked}>Submit</button>
      </div>
    </form>
  );
}

export default CommentAddForm;
