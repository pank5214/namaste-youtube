import React from "react";

const ShimmerVideCard = () => {
  return (
    <div className="p-2 m-2 w-[315px] rounded-lg shadow-lg h-auto">
      <div className="w-full h-44 rounded-xl bg-slate-100"></div>
      <div className="pt-3 flex">
        <div className="w-12 h-10 rounded-full bg-slate-100"></div>
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
    <div className="flex flex-wrap justify-between px-10 my-4 mt-14 w-full">
      {Array(24)
        .fill(0)
        .map((val, index) => {
          return <ShimmerVideCard key={index} />;
        })}
    </div>
  );
};

export default Shimmer;
