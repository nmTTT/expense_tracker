"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [totalInc, setTotalInc] = useState([]);
  const [totalExpInc, setTotalExpInc] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/dashboard/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        setTotalExpInc(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <DashboardContext.Provider value={{ fetchDashboardData, totalExpInc }}>
      {children}
    </DashboardContext.Provider>
  );
};
