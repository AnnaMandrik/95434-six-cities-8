import Review from '../review/review';
import {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {fetchCommentsAction} from '../../store/api-actions';
import {Comment, ThunkAppDispatch} from '../../types/types';
/* eslint-disable no-console */
const mapStateToProps = ({comments} : {comments: Comment[]}) => ({comments});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({loadComments: fetchCommentsAction}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ReviewListProps = PropsFromRedux & {offerId: number}


function ReviewsList({offerId, comments, loadComments}: ReviewListProps): JSX.Element {
  useEffect(() => {
    loadComments(offerId);
  }, [offerId, loadComments]);

  return(
    <ul className="reviews__list">
      {comments.map((comment) => <Review commentInfo={comment} key={comment.id} />)}
    </ul>
  );
}

export default connector(ReviewsList);

