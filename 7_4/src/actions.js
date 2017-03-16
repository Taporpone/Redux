import uuid from 'uuid';
import { createStore } from 'redux';
import reducer from './reducer';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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

const store = createStore(reducer);

const boundAddComment = text => store.dispatch(addComment(text));
const boundRemoveComment = id => store.dispatch(removeComment(id));
const boundEditComment = (id, text) => store.dispatch(editComment(id, text));
const boundThumbUpComment = id => store.dispatch(thumbUpComment(id));
const boundThumbDownComment = id => store.dispatch(thumbDownComment(id));