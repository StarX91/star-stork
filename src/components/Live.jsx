import React from "react";

const Live = ({ name, arrow }) => {
  return (
    <div className="flex border-2 border-neutral-400 my-4 lg:my-16 h-28 w-full lg:w-7/12 rounded-2xl ">
      <div className="flex flex-col justify-center ml-4">
        <p className="text-6xl text-neutral-300 ">0</p>
        <div className="flex justify-between">
          <p className="text-neutral-300 text-xl ">{name}</p>
          <button className="flex justify-end text-white text-3xl ">
            {arrow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Live;
