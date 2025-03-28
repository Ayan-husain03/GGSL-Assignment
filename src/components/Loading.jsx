import React from "react";

function Loading() {
  const array = Array.from({ length: 6 }, (_, i) => i);
  return (
    <>
      {array.map((item) => (
        <div key={item} className="overflow-hidden rounded-xl shadow-2xl animate-pulse">
          <div className="w-full h-48 overflow-hidden">
            <div className="h-full w-full bg-gray-300"></div>
          </div>
          <div className="flex gap-3 text-2xl px-3 my-3">
            <div className="h-6 bg-gray-300 rounded w-full"></div>
          </div>
          <div className="px-3 ">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-5 px-5">
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Loading;
