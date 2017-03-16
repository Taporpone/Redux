import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer);

const boundAddComment = text => store.dispatch(addComment(text));
const boundRemoveComment = id => store.dispatch(removeComment(id));
const boundEditComment = (id, text) => store.dispatch(editComment(id, text));
const boundThumbUpComment = id => store.dispatch(thumbUpComment(id));
const boundThumbDownComment = id => store.dispatch(thumbDownComment(id));