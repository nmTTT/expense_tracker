import React, { useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";

const BarChartCard = ({ title }) => {
  const barData = {
    labels: ["Jan"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [20_000],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [15_000],
      },
    ],
  };

  const barOptions = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="h-full w-full flex flex-col card bg-white shadow-xl">
      <div className="px-4 py-2">
        <p className="font-semibold">{title}</p>
      </div>
      <div className="w-full border-gray-200 border"></div>
      <div className="m-auto w-fit h-full">
        <Bar className="h-full" data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default BarChartCard;
