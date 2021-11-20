import {ChangeEvent, FormEvent, useState, useCallback} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {blockedReviewLengthSubmit} from '../../utils/utils';
import {postCommentAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/types';
import CommentAddStars from '../comment-add-stars/comment-add-stars';
import CommentAddText from '../comment-add-text/comment-add-text';

const TIME_ERROR = 5000;

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({postComment: postCommentAction}, dispatch);
const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type CommentFormProps = PropsFromRedux & {offerId: number};

function CommentAddForm({offerId, postComment}: CommentFormProps): JSX.Element {

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

  const handleSubmit=(evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBlock(true);
    postComment({offerId, review, rating, clearComment, notifyError, unblockForm});
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

export default connector(CommentAddForm);
