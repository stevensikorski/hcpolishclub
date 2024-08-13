"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { navigationData } from "@/lib/data";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(navigationData.home.url);
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

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
