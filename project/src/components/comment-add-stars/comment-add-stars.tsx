import {ChangeEvent, memo} from 'react';
import {STARS} from '../../const';


type CommentAddStarsProps = {
  onChange:  (evt: ChangeEvent<HTMLInputElement>) => void,
  disabled: boolean,
  rating: number,
}

type RatingStarProps = {
  star: {
    score: number,
    titleName: string},
}


function RatingStar({star: {score, titleName}, rating, onChange, disabled}: RatingStarProps & CommentAddStarsProps) {

  const idStar = `${score}-stars`;

  return (
    <>
      <input
        disabled={disabled}
        onChange={onChange}
        checked={score === rating}
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


function CommentAddStars(props : CommentAddStarsProps): JSX.Element {

  const stars = STARS.map((star) => (
    <RatingStar
      star={star}
      key={star.score}
      {...props}
    />));

  return (
    <div className="reviews__rating-form form__rating">
      {stars}
    </div>
  );
}

export default memo(CommentAddStars);
