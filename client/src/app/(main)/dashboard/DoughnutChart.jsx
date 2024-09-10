import { plugins } from "chart.js";
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
    plugins: {
      legend: {
        position: "right",
      },
    },
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="card bg-white shadow-xl h-full w-full flex flex-col">
      <div className="p-2">
        <p className="font-semibold">{title}</p>
      </div>
      <div className="border-gray-200 border"></div>
      <div className="m-auto">
        <div className="w-fit flex justify-center">
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
