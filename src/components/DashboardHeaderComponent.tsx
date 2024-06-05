"use client";
import { LogoutButton } from "@/app/auth";
import { useSession } from "next-auth/react";

export const DashboardHeaderComponent = () => {
  const { data: session } = useSession();

  return (
    <section className="full h-12 bg-slate-200 border-b">
      <div className="page h-full flex justify-between items-center">
        <h2 className="font-semibold text-szary">Dashboard</h2>
        <div className="flex justify-center items-center gap-4">
          <p>
            Cześć <span className="font-semibold">{session?.user?.name?.split(" ")[0]}</span>!
          </p>
          <LogoutButton></LogoutButton>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeaderComponent;
