import React from "react";

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

export default Comment;
