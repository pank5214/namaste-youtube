import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { IoSendSharp } from "react-icons/io5";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[445px] ml-1 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full p-1 ml-1 border border-black rounded-lg flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Pankaj Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[95%] border border-gray-400 rounded-full p-2 px-4"
          placeholder="Chat..."
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="py-1 m-2 px-3 rounded-lg"
          disabled={!liveMessage.trim()}
        >
          <IoSendSharp className="h-7 w-auto" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
