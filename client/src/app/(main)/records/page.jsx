"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { UserContext } from "../context/user-context";

const Records = () => {
  // const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      setTransactionData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransactions();
    }
  }, [user.id]);
  return <div>Records</div>;
};

export default Records;
