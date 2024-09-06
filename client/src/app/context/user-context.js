"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    profile_img: "",
  });

  const [transAmount, setTransAmount] = useState([]);
  const [expenseCat, setExpenseCat] = useState([]);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
        const {
          totalTransType,
          dayTrans,
          weekCategoryTrans,
          latestFiveRecords,
        } = await response.json();
        setTransAmount(dayTrans);
        setExpenseCat(weekCategoryTrans);
        console.log(
          "USER",
          totalTransType,
          dayTrans,
          weekCategoryTrans,
          latestFiveRecords
        );
        console.log("user", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
