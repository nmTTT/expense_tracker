"use client";
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
      <div className="m-auto h-full w-fit flex justify-center bg-red-600">
        <div className="w-fit flex justify-center">
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            height={600}
            width={1000}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
