"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/dashboard/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setDashboardData(response.data);
        console.log("user", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <DashboardContext.Provider value={{ fetchDashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};
