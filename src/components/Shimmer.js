import React from "react";

const ShimmerVideCard = () => {
  return (
    <div className="p-2 m-2 w-80 rounded-lg shadow-lg h-auto">
      <div className="w-full h-44 rounded-xl bg-slate-100"></div>
      <div className="pt-3 flex">
        <div className="w-10 h-10 rounded-full bg-slate-100"></div>
        <div className="w-full mx-2">
          <div className="py-2 mx-2 w-full rounded-2xl bg-slate-100"></div>
          <div className="py-2 m-2  w-full rounded-2xl bg-slate-100"></div>
          <div className="py-2 m-2 w-3/4 rounded-2xl bg-slate-100"></div>
          <div className="py-2 m-2 w-3/4 rounded-2xl bg-slate-100"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly px-10 w-full">
      {Array(24)
        .fill()
        .map((val, index) => {
          return <ShimmerVideCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
