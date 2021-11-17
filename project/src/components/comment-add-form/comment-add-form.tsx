import {ChangeEvent, FormEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {STARS} from '../../const';
import {blockedReviewLengthSubmit} from '../../utils/utils';
import {postCommentAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/types';

const TIME_ERROR = 5000;

type RatingStarProps = {
  star: {score: number, titleName: string},
  starsCount: number,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  disabled: boolean,
}


function RatingStar({star: {score, titleName}, starsCount, onChange, disabled}: RatingStarProps) {

  const idStar = `${score}-stars`;

  return (
    <>
      <input
        disabled={disabled}
        onChange={onChange}
        checked={score === starsCount}
        className="form__rating-input visually-hidden" name="rating" value={score} id={idStar} type="radio"
      />
      <label htmlFor={idStar} className="reviews__rating-label form__rating-label" title={titleName}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

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

  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {STARS.map((star) => (
          <RatingStar
            disabled={isBlocked}
            star={star}
            starsCount={rating}
            onChange={() => setRating(star.score)}
            key={star.score}
          />))}

      </div>
      <textarea
        disabled={isBlocked}
        value={review}
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value)}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
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
