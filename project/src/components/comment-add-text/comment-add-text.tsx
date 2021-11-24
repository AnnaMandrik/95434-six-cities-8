import {ChangeEvent, memo} from 'react';


type CommentAddTextProps = {
  onChange:  (evt: ChangeEvent<HTMLTextAreaElement>) => void,
  disabled: boolean,
  value: string,
}

function CommentAddText(props : CommentAddTextProps): JSX.Element {


  return (
    <textarea
      {...props}
      className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
    >
    </textarea>
  );
}

export default memo(CommentAddText);
