import React from "react";

function CardTotalExpInc({ title }) {
  return (
    <div>
      <div className="card bg-white w-96 h-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTotalExpInc;
