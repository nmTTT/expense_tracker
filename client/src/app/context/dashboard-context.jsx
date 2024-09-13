"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [totalInc, setTotalInc] = useState([]);
  const [totalExp, setTotalExp] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/dashboard/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const { total_income, total_expense } = await response.json();
        setTotalExp(total_expense.sum);
        setTotalInc(total_income.sum);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <DashboardContext.Provider
      value={{ fetchDashboardData, totalExp, totalInc }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
