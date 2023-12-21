/* eslint-disable max-len */
import { useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { useLoginMutation } from "../../../storage/features/auth/service";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const query = router.query;
  const [doLogin, { isSuccess }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isSuccess) {
      router.push(`/${query.locale}`);
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit(({ email, password }) => {
    doLogin({ email, password });
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        name="loginForm"
        autoComplete="off"
        className="flex w-full min-w-fit max-w-md flex-col border border-solid rounded border-blue-400 p-6 gap-6"
        onSubmit={onSubmit}
      >
        <h1 className="text-center font-semibold text-xl">Welcome to Login</h1>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={clsx(
              "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none",
              errors.email && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Email is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={clsx(
              "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none",
              errors.password && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Your password is required</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="flex justify-center">
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Do not have account? Register&nbsp;
            <a
              className="text-blue-600 hover:underline dark:text-blue-500"
              href={"/register"}
            >
              here
            </a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;

Login.getLayout = (page: React.ReactElement) => {
  console.log("get lay out");
  return page;
};
