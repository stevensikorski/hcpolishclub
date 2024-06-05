"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="flex items-center bg-szary px-2 p-1 rounded-md hover:bg-czerwony transition duration-200">
      <MdLogout className="h-6 text-white"></MdLogout>
      <p className="h-6 text-white px-1">Logout</p>
    </button>
  );
};
