import React from "react";

const commentsData = [
  {
    name: "Pankaj Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Pankaj Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Pankaj Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Pankaj Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Pankaj Kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "Pankaj Kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "Pankaj Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [
                          {
                            name: "Pankaj Kumar",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Pankaj Kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [
                          {
                            name: "Pankaj Kumar",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            replies: [
                              {
                                name: "Pankaj Kumar",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pankaj Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Pankaj Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Pankaj Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm p-2 rounded-lg bg-gray-100 my-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-logo"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclamer : Don't Use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
