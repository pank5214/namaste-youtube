import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  const ref = useRef(0);

  console.log("Ref", ref)

  /**
   * It's not like => ref = 0;
   *
   * ref = {current: 0}
   */

  let x = 0;

  console.log("Rendering...");

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="w-96 h-96 border border-black p-2 m-2 rounded-lg ">
      <div>
        <button
          className="m-2 p-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>

      <div>
        <button
          className="m-2 p-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>

      <div>
        <button
          className="m-2 p-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
          onClick={() => {
            ref.current++;
            console.log("Ref=", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>

      <div>
        <button
          className="p-2 m-2 bg-red-900 rounded-lg text-white"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;
