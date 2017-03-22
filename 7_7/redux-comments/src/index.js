import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducer';
import { addComment } from './Redux/actions';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy'));
store.dispatch(addComment('drugi'));