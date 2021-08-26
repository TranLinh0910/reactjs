import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { onSignUp } from "../components/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onHandleSubmit = (data, e) => {
    onSignUp(data).then((dataInput) => {
      if (dataInput.error) {
        setError(dataInput.error);
      } else {
        e.target.reset();
        setError("");
        setSuccess(true);
      }
    });
  };

  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">ĐĂNG KÍ</h1>
        <form action className="mt-6" onSubmit={handleSubmit(onHandleSubmit)}>
        <div style={{display: error ? "block" : "none"}} className="block bg-red-200 text-red-500 border border-red-light w-full p-3 rounded mb-4">{error}</div>
            <div style={{display: success ? "block" : "none"}}>
              Bạn đã đăng ký thành công click để <Link to="/user/signin">Đăng nhập</Link>
            </div>
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              autofocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Username"
              {...register("name")}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="text"
              autofocus
              id="email"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
          >
            Đăng kí
          </button>
        </form>
        <div className="flex md:justify-between justify-center items-center mt-10">
          <div
            style={{ height: "1px" }}
            className="bg-gray-300 md:block hidden w-4/12"
          />
          <p className="md:mx-2 text-sm font-light text-gray-400">
            {" "}
            Login With Social{" "}
          </p>
          <div
            style={{ height: "1px" }}
            className="bg-gray-300 md:block hidden w-4/12"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-2 mt-7">
          <div>
            <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
              Facebook
            </button>
          </div>
          <div>
            <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">
              Twitter
            </button>
          </div>
        </div>

        <Link to="/user/signin">Đăng nhập ngay?</Link>
      </div>
    </div>
  );
};

export default SignUp;
