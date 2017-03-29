import { connect } from 'react-redux';
import Comment from '../presentation/Comment';
import { thumbUpComment, thumbDownComment, removeComment } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);