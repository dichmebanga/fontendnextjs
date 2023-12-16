"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import DropdownComponent from "./dropDownList";

function dashboard() {
  const router = useRouter();
  const cookies = new Cookies();
  const exitLogin = localStorage?.getItem("isLogin");

  const goHome = () => {
    router.push("/");
  };

  const logOut = () => {
    cookies.remove("accessToken");
    localStorage.removeItem("isLogin");
    router.push("/");
  };

  useEffect(() => {
    if (exitLogin !== "1") {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between bg-amber-300 w-full">
        <DropdownComponent />
        <div className="text-gray-500 text-center">
          <button
            onClick={goHome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            HOME
          </button>
        </div>
        <div className="text-gray-500 text-right">
          <button
            onClick={logOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            Log Out
          </button>
        </div>
      </div>
      
      <div className="w-full h-[730px] bg-amber-300">
        <img
          className="w-[586.86px] h-[543px] left-[790px] top-[180px] absolute"
          src="/imagesHuman.png"
        />
        <div className="w-[673px] left-[117px] top-[363px] absolute text-black text-[70px] font-bold font-['Inter'] uppercase leading-[117px]">
          OUTLAND
        </div>
        <div className="left-[117px] top-[457px] absolute text-black text-3xl font-light font-['Inter'] leading-[39px] tracking-[9px]">
          {/* www.dev.to */}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
