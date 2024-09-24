// App.js
import React from 'react';

import './App.css';
import Comment from './Components/Comment';

const post = {
  id: 1,
  user: "ROhit@_98336496_singha",
  avatar: "https://via.placeholder.com/30",
  text: "That is not a thing i am tking about you as well",
  upvotes: 3456,
  downvotes: 0,
  time: "7h ago",
};

const comments = [
  {
    id: 2,
    user: "Primax_###",
    avatar: "https://via.placeholder.com/30",
    text: "Yeah, my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
    upvotes: 61,
    downvotes: 0,
    time: "5h ago",
    replies: [
      {
        id: 3,
        user: "PRIMUS_SINCE_2000",
        avatar: "https://via.placeholder.com/30",
        text: "Nothing better than me as well as my pet as it goes",
        upvotes: 25,
        downvotes: 0,
        time: "5h ago",
        replies: [],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="post">
        <Comment comment={post} replies={comments} />
      </div>
    </div>
  );
}

export default App;
