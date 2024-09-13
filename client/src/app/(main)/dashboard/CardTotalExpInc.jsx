import React, { useContext } from "react";

function CardTotalExpInc({ title, total_trans }) {
  return (
    <div className="card bg-white h-full shadow-xl flex-1">
      <div className="w-full">
        <p className="border-gray-100 border-b-2 p-3 font-semibold">{title}</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <h1>{total_trans}</h1>
            <p>{title} Amount</p>
          </div>
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
}

export default CardTotalExpInc;
