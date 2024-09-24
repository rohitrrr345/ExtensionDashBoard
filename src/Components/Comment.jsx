// Comment.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faReply, faAward, faShare } from '@fortawesome/free-solid-svg-icons';
import './Comment.css'; // You can style based on Reddit's design.

const Comment = ({ comment, replies }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img src={comment.avatar} alt="User avatar" className="comment-avatar" />
        <span className="comment-user">{comment.user}</span>
        <span className="comment-time">{comment.time}</span>
      </div>
      <div className="comment-content">
        {comment.text}
      </div>
      <div className="comment-actions">
        <FontAwesomeIcon icon={faArrowUp} /> {comment.upvotes}
        <FontAwesomeIcon icon={faArrowDown} /> {comment.downvotes}
        <button className="reply-btn">
          <FontAwesomeIcon icon={faReply} /> Reply
        </button>
        <button className="award-btn">
          <FontAwesomeIcon icon={faAward} /> Award
        </button>
        <button className="share-btn">
          <FontAwesomeIcon icon={faShare} /> Share
        </button>
        <span className="more-options">...</span>
      </div>
      {replies && replies.length > 0 && (
        <div className="replies-section">
          <button onClick={toggleReplies} className="toggle-replies-btn">
            {showReplies ? `Hide ${replies.length} replies` : `Show ${replies.length} replies`}
          </button>
          {showReplies && (
            <div className="nested-replies">
              {replies.map(reply => (
                <Comment key={reply.id} comment={reply} replies={reply.replies} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
