"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";
import ChartCard from "./ChartCard";
import CardTotalExpInc from "./CardTotalExpInc";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/dashboard/${user.id}`);
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

  return (
    <div className="bg-gray-100 p-10 flex flex-col gap-6 justify-center">
      <div className="flex gap-6 justify-center">
        <div>
          <div className="card image-full w-96 h-full shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <img src="Frame_24.png" alt="geld logo" />
              </div>
              <div className="card-actions justify-between">
                <div className="flex flex-col gap-2">
                  <p>Cash</p>
                  <div>10'000'000</div>
                </div>
                <img src="./Logo.png" alt="wifi chip" />
              </div>
            </div>
          </div>
        </div>
        <CardTotalExpInc title="Your Income" />
        <CardTotalExpInc title="Total Expense" />
      </div>
      <div className="flex gap-6 justify-center">
        <ChartCard />
        <ChartCard />
      </div>
      <div>
        <div></div>
      </div>
      {/* <div>
				<h2>Records</h2>
				{transactionData?.transactions?.map((transaction, index) => {
					return (
						<div key={index} className="flex">
							<img src="/income.svg" alt="income" />
							<div>
								<p className="mb-1">{transaction?.name}</p>
								<p className="text-[#6B7280]">{transaction?.createdat}</p>
							</div>
						</div>
					);
				})}
			</div> */}
    </div>
  );
};

export default Dashboard;
