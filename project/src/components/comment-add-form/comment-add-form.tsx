import {ChangeEvent, FormEvent, useState} from 'react';
import {STARS} from '../../const';
import {blockedReviewSubmit} from '../../utils/utils';

type RatingStarProps = {
  star: {score: string, titleName: string},
  starsCount: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
}


function RatingStar({star: {score, titleName}, starsCount, onChange}: RatingStarProps) {

  const idStar = `${score}-stars`;

  return (
    <>
      <input
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


function CommentAddForm(): JSX.Element {

  const [review, setReview] = useState('');
  const [starsCount, setStarsCount] = useState('');

  const blockedState = blockedReviewSubmit(starsCount, review);

  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setReview('');
        setStarsCount('');
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {STARS.map((star) => (
          <RatingStar star={star}
            starsCount={starsCount}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => setStarsCount(evt.target.value)}
            key={star.score}
          />))}

      </div>
      <textarea
        value={review}
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value)}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={blockedState}>Submit</button>
      </div>
    </form>
  );
}

export default CommentAddForm;
