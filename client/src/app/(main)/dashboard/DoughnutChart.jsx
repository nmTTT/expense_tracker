import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ title }) {
  const doughnutData = {
    datasets: [
      {
        data: [10, 10, 20, 40, 20],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Food", "Tech", "Taxi", "Health", "Car"],
  };
  const doughnutOptions = {
    legend: {
      align: "center",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="card flex flex-col bg-white shadow-xl h-full w-full">
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
}

export default DoughnutChart;
