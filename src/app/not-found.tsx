"use client";

import { useEffect } from "react";

import { navigationData } from "@/lib/data";

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = navigationData.home.url;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page-main">
      <section className="page">
        <div className="flex flex-col justify-center items-center h-landing">
          {/* Page Not Found */}
          <h1 className="font-bold text-3xl">Przepraszamy!</h1>
          <p className="mt-6">The page you are looking for cannot be found.</p>
          <p>You will be redirected in a moment.</p>
        </div>
      </section>
    </main>
  );
}
