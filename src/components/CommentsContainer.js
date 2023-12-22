import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { YOUTUBE_VIDEO_COMMENTS_API } from "../utils/Constants";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const data = await fetch(YOUTUBE_VIDEO_COMMENTS_API + videoId);
      const json = await data.json();
      setComments(json?.items);
    };

    if (videoId != null) {
      getComments();
    }
  }, [videoId]);

  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold my-2">Comments</h1>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <CommentsList comment={comment} />
          </div>
        ))}
    </div>
  );
};

export default CommentsContainer;
