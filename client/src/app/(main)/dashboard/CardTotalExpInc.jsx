import { UserContext } from "@/app/context/user-context";
import React, { useContext } from "react";

function CardTotalExpInc({ title }) {
  const { fetchUserData } = useContext(UserContext);

  return (
    <div>
      <div className="card bg-white w-96 h-full shadow-xl">
        <div className="w-full">
          <p className="border-gray-100 border-b-2 p-3 font-semibold">
            {title}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <div></div>
              <p>{title} Amount</p>
            </div>
            <p>32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTotalExpInc;
