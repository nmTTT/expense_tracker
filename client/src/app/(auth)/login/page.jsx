"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/utils/util";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;

    try {
      const res = await axios.post(`${apiUrl}/auth/logIn`, {
        email,
        password,
      });

      if (res.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1500 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-1 flex-col items-center justify-center h-screen gap-10">
        <Image src="./logo.svg" width={90} height={25} alt="Logo" />
        <h2>Welcome Back</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs input input-bordered"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button
            className="btn btn-wide bg-[#0166FF] text-white"
            onClick={logIn}
          >
            Log in
          </button>
        </div>
        <div>
          <span>Don’t have account?</span>
          <button className="btn btn-link">
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
      </div>
      <div className="bg-[#0166FF] flex-1"></div>
    </div>
  );
};

export default Login;
