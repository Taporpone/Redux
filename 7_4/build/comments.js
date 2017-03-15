'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = comments;

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    comments: [],
    users: []
};

function comments() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }].concat(_toConsumableArray(state))
            });
            break;
        case _actions.REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(function (comment) {
                    return comment.id !== action.id;
                })
            });
        case _actions.EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(function (item) {
                    if (item.id === action.id) {
                        item.text = action.text;
                    }
                })
            });
        case _actions.THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(function (item) {
                    if (item.id === action.id) {
                        item.votes--;
                    }
                })
            });

        case _actions.THUMB_DOWN_COMMENT:
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