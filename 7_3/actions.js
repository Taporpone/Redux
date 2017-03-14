import uuid from 'uuid';
import { createStore } from 'redux';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const initialState = {
    comments: [],
}

function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0,
                    }
                    , ...state]
            });
            break;
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(item => {
                    if (item.id === action.id) {
                        item.text = action.text;
                    }
                })
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(item => {
                    if (item.id === action.id) {
                        item.votes--;
                    }
                })
            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(item => {
                    if (item.id === action.id) {
                        item.votes++;
                    }
                })
            });

        default:
            return state;
    }
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text,
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
    }
}

const store = createStore(comments);

const boundAddComment = text => store.dispatch(addComment(text));
const boundRemoveComment = id => store.dispatch(removeComment(id));
const boundEditComment = (id, text) => store.dispatch(editComment(id, text));
const boundThumbUpComment = id => store.dispatch(thumbUpComment(id));
const boundThumbDownComment = id => store.dispatch(thumbDownComment(id));