import React, { useContext } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function CardTotalExpInc({ title, total_trans, arrow, arrowBg }) {
  return (
    <div className="card bg-white h-full shadow-xl flex-1">
      <div className="w-full">
        <p className="p-3 font-semibold">{title}</p>
        <div className="border border-gray-200 w-full"></div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-semibold text-3xl">{total_trans}$</h1>
            <p className="text-gray-500">{title} Amount</p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center ${arrowBg} p-1 rounded-full text-white`}
            >
              {arrow}
            </div>
            <p>32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTotalExpInc;
