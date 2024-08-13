"use client";

import { MdAccountCircle } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FormEvent } from "react";
import { useState } from "react";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const togglePassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        callbackUrl: "/dashboard",
        redirect: false,
      });
      if (!res?.error) {
        router.push("/dashboard");
      } else {
        setError(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setError(false);
      }
    } catch (err: any) {}
  };

  return (
    <form onSubmit={onSubmit} className="hidden desktop:flex flex-col w-80">
      {/* Alert */}
      <p className={clsx("h-8 rounded-md border border-czerwony bg-red-200 flex justify-center items-center px-3 text-szary text-sm transition duration-200", { "opacity-100": error === true, "opacity-0": error === false })}>Invalid username or password.</p>

      {/* Username */}
      <div className="h-10 rounded-md border bg-white flex justify-center items-center mt-2">
        <MdAccountCircle className="ml-3 size-5 text-srebro"></MdAccountCircle>
        <input id="username" value={username} onChange={usernameChange} type="text" className="h-full w-full px-3 text-szary text-sm border-none outline-none" placeholder="Username"></input>
      </div>

      {/* Password */}
      <div className="h-10 rounded-md border bg-white flex justify-center items-center mt-2">
        <IoKey className="ml-3 size-5 text-srebro"></IoKey>
        <input id="password" value={password} onChange={passwordChange} type={hiddenPassword ? "password" : "text"} className="h-full w-full px-3 text-szary text-sm border-none outline-none" placeholder="Password"></input>
        <button type="button" onClick={togglePassword} className="size-5 mr-3">
          {hiddenPassword ? <IoMdEye className="size-5 text-srebro" /> : <IoMdEyeOff className="size-5 text-srebro" />}
        </button>
      </div>

      {/* Remember Me */}
      {/* <div className="flex items-center mt-4">
        <input id="remember" type="checkbox" className="size-4 bg-white text-white text-xs rounded border outline-none cursor-pointer flex justify-center items-center"></input>
        <label className="ml-2 h-4 text-sm text-srebro flex justify-center items-center">Remember Me</label>
      </div> */}

      {/* Login Button */}
      <button type="submit" className="h-10 bg-czerwony text-white font-semibold rounded-md mt-8">
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
