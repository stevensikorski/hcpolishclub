"use client";
import React, { useState, useEffect } from "react";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import { useRouter } from "next/navigation";

export default function DeleteEventPage() {
  const [events, setEvents] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/events", {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });
        if (response?.ok) {
          const data = await response.json();
          setEvents(data.events);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleDelete = async (id: String) => {
    try {
      const response = await fetch("/api/events", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response?.ok) {
        router.push("/events");
      }
    } catch (error) {}
  };

  return (
    <main className="page-main">
      <DashboardHeaderComponent />
      <section className="page min-h-screen">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="dashboard-padding">ID</th>
                <th className="dashboard-padding">Title</th>
                <th className="dashboard-padding">Description</th>
                <th className="dashboard-padding">Start</th>
                <th className="dashboard-padding">End</th>
                <th className="dashboard-padding">Room</th>
                <th className="dashboard-padding">Address</th>
                <th className="dashboard-padding">Details</th>
                <th className="dashboard-padding">Modified By</th>
                <th className="dashboard-padding">Modified Date</th>
                <th className="dashboard-padding">Delete</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="dashboard-padding">{event.id}</td>
                  <td className="dashboard-padding">{event.title}</td>
                  <td className="dashboard-padding">{event.description}</td>
                  <td className="dashboard-padding">{event.start}</td>
                  <td className="dashboard-padding">{event.end}</td>
                  <td className="dashboard-padding">{event.room}</td>
                  <td className="dashboard-padding">{event.address}</td>
                  <td className="dashboard-padding">
                    <a href={event.details} target="_blank" rel="noopener noreferrer">
                      {event.details}
                    </a>
                  </td>
                  <td className="dashboard-padding">{event.modified_by}</td>
                  <td className="dashboard-padding">{event.modified_date}</td>
                  <td className="dashboard-padding">
                    <button onClick={() => handleDelete(event.id)} className="bg-czerwony text-white px-2 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
