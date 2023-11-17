// src/components/AuthForm.js
"use client";
// src/components/AuthForm.js
import React from "react";
import { useForm } from "react-hook-form";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const onSubmit = (data: any) => {
    // Xử lý dữ liệu khi form được submit
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-gray-600">LOGIN</h1>
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
    </div>
  );
};

export default AuthForm;
