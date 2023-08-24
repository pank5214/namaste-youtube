import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Heavy Operation
  //   const prime = findPrime(text);
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "w-96 h-96 border border-black p-2 m-2 rounded-lg " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="my-4 p-2 bg-blue-400 rounded-lg hover:bg-blue-500"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black px-2 py-1 w-2/3 rounded-lg text-black"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>

      <div>
        <h1 className="font-bold text-xl p-2 mt-4">nth Prime No: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
