"use client";

import { useContext, useEffect, useState } from "react";
import CardTotalExpInc from "./CardTotalExpInc";
import { UserContext } from "@/app/context/user-context";
import BarChartCard from "./BarChartCard";
import DoughnutChart from "./DoughnutChart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import { DashboardContext } from "@/app/context/dashboard-context";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = ({ fetchDashboardData }) => {
  const { user } = useContext(UserContext);
  const { totalExp, totalInc } = useContext(DashboardContext);
  useEffect(() => {
    if (user && user?.id) {
      fetchDashboardData();
    }
  }, [user?.id]);

  return (
    <div className="container m-auto flex flex-col gap-6 items-center w-[100vw]">
      <div className="flex gap-6 h-[15rem] w-full">
        <div className="card image-full shadow-xl flex-1">
          <figure>
            <img
              className="w-full"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <img src="Frame_24.png" alt="geld logo" />
            </div>
            <div className="card-actions justify-between">
              <div className="flex flex-col gap-2">
                <p>Cash</p>
                <div>10'000'000</div>
              </div>
              <img src="./Logo.png" alt="wifi chip" />
            </div>
          </div>
        </div>
        <CardTotalExpInc
          className="flex"
          title="Your Income"
          total_trans={totalInc}
        />
        <CardTotalExpInc
          className="flex"
          title="Total Expense"
          total_trans={totalExp}
        />
      </div>
      <div className="container m-auto grid grid-cols-2 gap-6">
        <div className="h-[18rem]">
          <BarChartCard title="Income - Expense" />
        </div>
        <div className="h-[18rem]">
          <DoughnutChart title="Income - Expense" />
        </div>
      </div>

      <div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
