"use client";
import clsx from "clsx";
import { LogoutButton } from "@/app/auth";
import { useSession } from "next-auth/react";

export const DashboardHeaderComponent = () => {
  const { data: session } = useSession();
  let name = "";
  name = session?.user?.name?.split(" ")[0] || "";

  return (
    <section className="full h-12 bg-slate-50 border-b">
      <div className="page h-full flex justify-between items-center">
        <h2 className="font-semibold text-szary">Dashboard</h2>
        <div className="flex justify-center items-center gap-4">
          <p className={clsx({ hidden: name === "" })}>
            Cześć <span className="font-semibold">{name}</span>!
          </p>
          <LogoutButton></LogoutButton>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeaderComponent;
