'use strict';

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ADD_COMMENT = 'ADD_COMMENT';
var REMOVE_COMMENT = 'REMOVE_COMMENT';
var EDIT_COMMENT = 'EDIT_COMMENT';
var THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
var THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

var initialState = {
    comments: []
};

function comments() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }].concat(_toConsumableArray(state))
            });
            break;
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(function (comment) {
                    return comment.id !== action.id;
                })
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(function (item) {
                    if (item.id === action.id) {
                        item.text = action.text;
                    }
                })
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(function (item) {
                    if (item.id === action.id) {
                        item.votes--;
                    }
                })
            });

        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(function (item) {
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
        text: text,
        id: _uuid2.default.v4()
    };
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: text
    };
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    };
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    };
}

var store = (0, _redux.createStore)(comments);

var boundAddComment = function boundAddComment(text) {
    return store.dispatch(addComment(text));
};
var boundRemoveComment = function boundRemoveComment(id) {
    return store.dispatch(removeComment(id));
};
var boundEditComment = function boundEditComment(id, text) {
    return store.dispatch(editComment(id, text));
};
var boundThumbUpComment = function boundThumbUpComment(id) {
    return store.dispatch(thumbUpComment(id));
};
var boundThumbDownComment = function boundThumbDownComment(id) {
    return store.dispatch(thumbDownComment(id));
};
