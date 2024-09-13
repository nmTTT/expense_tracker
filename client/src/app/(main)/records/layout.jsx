"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "@/app/context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "@/app/components/header";

const Layout = ({ children }) => {
  const { fetchUserData } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <Header user={user} logOut={logOut} />
      {children}
    </div>
  );
};

export default Layout;
