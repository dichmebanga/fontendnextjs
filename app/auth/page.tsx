"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { handleData } from "../controllData/functionHandleReq";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    await handleData(`http://localhost:3000/users/login`, "POST", data).then(
      (res: any) => {
        localStorage.setItem("isLogin", "1");
        res?.data?.success && router.push("/", { scroll: false });
      }
    );
  };

  const exitLogin = localStorage?.getItem("isLogin");

  return (
    <div>
      {exitLogin !== "1" ? (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-gray-600 text-center">LOGIN</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}

            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      ) : (
          <div className="w-full h-[860px] relative bg-violet-600">
            <div className="text-gray-500 text-right">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
              >
                Dash Board
              </button>
            </div>
            <div className="left-[100px] top-[100px] absolute text-white text-[60px] font-medium font-['Inter'] leading-[90px]">
              Template
              <br />
              Website
            </div>
            <img
              className="w-16 h-16 left-[100px] top-[780px] absolute rounded-full"
              src="https://img.freepik.com/free-vector/cute-bee-flying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector_138676-6016.jpg?w=1060&t=st=1700637804~exp=1700638404~hmac=6d0f4382f4b196e8e6dc9a633bea10c936adebaa57fc06343d11ef4b0ce7ed60"
            />
            <div className="left-[180px] top-[760px] absolute">
              <span className="text-white text-2xl font-semibold font-['Inter'] leading-loose">
                Hà Tấn Duy
                <br />
              </span>
              <span className="text-white text-2xl font-light font-['Inter'] underline leading-loose">
                hatanduy123@gmail.com
              </span>
            </div>
            <div className="w-[805px] h-[680px] left-[535px] top-[244px] absolute">
              <div className="w-[742px] h-[419px] left-[32px] top-[44px] absolute">
                <div className="w-[742px] h-[419px] left-0 top-0 absolute bg-stone-300"></div>
                <img
                  className="w-[742px] h-[419px] left-0 top-0 absolute"
                  src="/screendesktop.png"
                />
              </div>
              <img
                className="w-[805px] h-[680px] left-0 top-0 absolute"
                src="https://s3-alpha-sig.figma.com/img/eb7c/5cc2/71efc5198af4edeb927a870c8ba5b3ae?Expires=1701648000&Signature=F1Fc1SKSbvw6ai9heyVfGnDuRN0Imvz6oDrxMsXkpZN14aZP7HSH7mE0-xe-yT32wqibL5LnpGgltxZD5GE2Q1I1XoCYbJuEOpNeCmDkxpA7~ZRIPMldzW6ImVgp4OL-jtj1FY87Zs4ieQsmsKcKIc1w6ZO3G9bXWFInlQMC6aj31Gtp4hI7KYurDLKUYD3ScBF~NKrFbu8PPJ3hP0rKX9T6Qi2uKKAj2AwkBoZ~lMJAWmfyIif8InLbsiHPL8goOl3ru2t0t7MgGJMq~LfvqX2Y26kb-B8jkaiBvntgmJ36w3sHjxcFIb9E0peqYErSutADksZJSSoNhGJLiB~~aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
            <div className="w-44 h-[344px] left-[447px] top-[593px] absolute">
              <div className="w-[136px] h-60 left-[20px] top-[51px] absolute">
                <div className="w-[136px] h-60 left-0 top-0 absolute bg-stone-300"></div>
                <img
                  className="w-[136px] h-[240px] absolute"
                  src="/screenmobile.png"
                />
              </div>
              <img
                className="w-44 h-[344px] left-0 top-0 absolute"
                src="https://s3-alpha-sig.figma.com/img/f52e/2b43/b32b8f3757c728a629942985b432fa99?Expires=1701648000&Signature=ZL2fIpbuEiPXPHAg0u3-YTvYeOl-5WLeOYPbLs5wQDzIuJHmrRHEIpNGNUOJHNZ8t1QXJmwZ-nNaA8EFiOKCNGv2KBfukT-6AdoS36OeZsB6baoj2uKk5ZcV5klqv9F-95XBQDgUZZk2BwKVRFJuhG3kcRkhxVowI9t2XBm0AaCxXJuv0IqyzOp8ToMEltRypUtfF~vbhmnVaK0Q81YRQzfE2-hli5davXCGHyBIISEfys8-zXFelVE9LZMUxoIbqCKuTdcvkoVJOuQ9lyo6eQA-ci24btFwkSGd1lQm9U8YSOZw8qMv5fwYk5x4O4SDPZfAgkpy3~Ef-aGbpl0UDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </div>
          </div>
      )}
    </div>
  );
};

export default AuthForm;
