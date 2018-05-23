// CommentList.js
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import Comment from './Comment';

const CommentList = (props) => {
  const commentNodes = props.data.map(comment => (
    <Comment 
      author={comment.author} 
      key={comment._id} 
      id={comment.id}
    >
      { comment.text}
    </Comment>
  ));
  return (
    <div>
      { commentNodes }
    </div>
  );
};

CommentList.propTypes = {
  data: [],
};

export default CommentList;