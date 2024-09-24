// data.js
export const postData = {
    id: 1,
    title: 'React Reddit Clone',
    content: 'This is a Reddit-like UI made with React',
  };
  
  export const commentsData = [
    {
      id: 1,
      text: 'This is the first comment',
      author: 'User1',
      replies: [
        {
          id: 11,
          text: 'This is a reply to the first comment',
          author: 'User2',
        },
      ],
    },
    {
      id: 2,
      text: 'This is the second comment',
      author: 'User3',
      replies: [],
    },
  ];
  