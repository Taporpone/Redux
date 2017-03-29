import React from 'react';
import CommentsListContainer from '../container/CommentsListContainer';
import AddCommentContainer from '../container/AddCommentContainer';

const App = () => {
  return (
    <div className='App'>
      <CommentsListContainer />
      <AddCommentContainer />
    </div>
  );
};

export default App;