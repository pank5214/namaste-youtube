import React from "react";
import TimeConverter from "./TimeConverter";
import { Link } from "react-router-dom";

const CommentsList = ({ comment }) => {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay,
    authorChannelUrl,
  } = comment?.snippet?.topLevelComment?.snippet || {};
  return (
    <div className="flex">
      <Link to={authorChannelUrl}>
        <img
          className="rounded-full cursor-pointer"
          src={authorProfileImageUrl}
          alt="user_image"
        />
      </Link>

      <div className="ml-6">
        <Link to={authorChannelUrl}>
          <div className="flex font-bold cursor-pointer">
            <h3>{authorDisplayName}</h3>
            <span className="ml-4 text-gray-600 hover:text-gray-700 font-medium">
              <TimeConverter utcTimestamp={publishedAt} />
            </span>
          </div>
        </Link>

        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default CommentsList;
