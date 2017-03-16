import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT } from './actions';

export default function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
            break;
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
            break;
        case EDIT_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.text = action.text : comment
                return comment;
            });
            break;
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.votes++ : comment
                return comment;
            });
            break;
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.votes-- : comment
                return comment;
            });
            break;
        default:
            return state;
    }
}