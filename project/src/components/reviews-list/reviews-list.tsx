import Review from '../review/review';
import {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {fetchCommentsAction} from '../../store/api-actions';
import {State, ThunkAppDispatch} from '../../types/types';
import {getComments} from '../../store/property-data/selectors';

const mapStateToProps = (state: State) => ({comments: getComments(state)});
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
      {comments
        .slice()
        .sort((prev, next) => new Date(next.date).getTime() - new Date(prev.date).getTime())
        .map((comment) => <Review commentInfo={comment} key={comment.id} />)}
    </ul>
  );
}

export default connector(ReviewsList);

