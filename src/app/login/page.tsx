"use client";
import Image from "next/image";
import { LoginComponent } from "@/components/LoginComponent";

export default function LoginPage() {
  return (
    <main className="page-main">
      <section className="page h-landing flex flex-col justify-center items-center text-center">
        <div className="desktop:h-1/2 desktop:w-1/3 p-6 bg-white rounded-xl border shadow-lg flex flex-col justify-center items-center">
          {/* Polish Cultural Club */}
          <div className="flex desktop:mb-6">
            <Image src="/CoatOfArmsTransparent.svg" alt="Image" height="40" width="40" priority className="rounded-md p-0.5 bg-czerwony"></Image>
            <div className="h-10 py-1 ml-3 flex flex-col justify-center">
              <h1 className="logo-text">Polish Cultural Club</h1>
              <h2 className="logo-text font-semibold">Hunter College</h2>
            </div>
          </div>

          {/* Desktop Restriction */}
          <p className="mt-8 text-srebro desktop:hidden text-wrap">This page is unavailable on your device.</p>

          {/* Login Component */}
          <LoginComponent></LoginComponent>
        </div>
      </section>
    </main>
  );
}