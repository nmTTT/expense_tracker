"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components";
import { DashboardProvider } from "../context/dashboard-context";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);
  const addRecord = () => {};

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <DashboardProvider>
      <Header user={user} logOut={logOut} />
      {children}
    </DashboardProvider>
  );
};

export default Layout;
