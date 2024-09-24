import React from 'react';
import Comment from './Comment';

const Post = ({ post, comments }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <h3>{post.author}</h3>
        <p>{post.text}</p>
      </div>
      <div className="post-actions">
        <span>{post.upvotes} upvotes</span>
      </div>

      {/* Render Comments */}
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
