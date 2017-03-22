import React from 'react';

const AddComment = (props) => {
    return (
        <div>
            <h1>Add new comment</h1>
            <input type='text' placeholder='write your comment' onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    props.addComment(e.target.value);
                }
            }} />
        </div>
    )
};

export default AddComment;