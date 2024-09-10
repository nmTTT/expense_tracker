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
    <div className="p-4 h-full">
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarChartCard;
