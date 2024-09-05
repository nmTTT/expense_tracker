import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/user-context";
const Highcharts = require("highcharts");

function BarChartCard() {
  const { transAmount } = useContext(UserContext);

  const lbl = transAmount.map((tr) => `W${format(tr.w, "d")}`);
  console.log(
    "LBL",
    transAmount.filter((tr) => tr.transaction_type === "EXP")
  );
  const barChart = () => {
    Highcharts.chart("container", {
      chart: {
        type: "column",
      },
      title: {
        text: "Income and Expenses",
        align: "left",
      },
      subtitle: {
        align: "left",
      },
      xAxis: {
        categories: lbl,
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
      },

      series: [
        {
          name: "INC",
          data: transAmount
            .filter((tr) => tr.transaction_type === "INC")
            .map((tr) => tr.sum),
        },
        {
          name: "EXP",
          data: transAmount
            .filter((tr) => tr.transaction_type === "EXP")
            .map((tr) => tr.sum),
        },
      ],
      credits: {
        enabled: false, // Disable credits
      },
    });
  };
  console.log(
    expenseCat.map((tr, { name, y }) => {
      ({ [name]: tr.cat_name, [y]: tr.total_amount });
    })
  );

  useEffect(() => {
    barChart();
  });

  return <div id="container" style={{ width: "100%", height: "400px" }}></div>;
}

export default BarChartCard;
