import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="page-main">
      <DashboardHeaderComponent></DashboardHeaderComponent>

      <section className="page">
        <div className="grid grid-cols-1 gap-2 mt-6">
          <div className="h-20 w-full bg-white rounded-xl border flex justify-between items-center">
            <p className="text-lg font-semibold ml-4">Create Event</p>
            <Link href={"/dashboard/create-event"} className="p-2 px-3 bg-srebro hover:bg-czerwony text-white font-semibold rounded mr-4 transition duration-200">
              Manage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
