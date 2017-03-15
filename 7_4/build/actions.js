'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.THUMB_DOWN_COMMENT = exports.THUMB_UP_COMMENT = exports.EDIT_COMMENT = exports.REMOVE_COMMENT = exports.ADD_COMMENT = undefined;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT';
var REMOVE_COMMENT = exports.REMOVE_COMMENT = 'REMOVE_COMMENT';
var EDIT_COMMENT = exports.EDIT_COMMENT = 'EDIT_COMMENT';
var THUMB_UP_COMMENT = exports.THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
var THUMB_DOWN_COMMENT = exports.THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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

var store = (0, _redux.createStore)(_reducer2.default);

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