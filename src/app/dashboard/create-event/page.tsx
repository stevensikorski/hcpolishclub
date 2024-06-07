"use client";
import { useState } from "react";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import EventCardComponent from "@/components/EventCardComponent";
import { useSession } from "next-auth/react";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function DashboardPage() {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [room, setRoom] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [rsvp, setRsvp] = useState("");
  const [image, setImage] = useState("");
  const [modified_by, setModified] = useState("");
  const [modified_date, setModifiedTime] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    setModified(session?.user.username);
    setModifiedTime(new Date().toISOString());

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          start,
          end,
          room,
          address,
          description,
          details,
          rsvp,
          image,
          modified_by,
          modified_date,
        }),
      });

      if (response.ok) {
        router.push("/events");
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
        setError(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setError(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="page-main">
      <DashboardHeaderComponent />

      <section className="page">
        {/* Event Preview */}
        <div className="w-full desktop:w-3/4 min-h-16">
          <h2 className="font-semibold mt-6 -mb-6">Event Preview</h2>
          <div className="flex desktop:mr-12">
            <EventCardComponent
              params={{
                id: 0,
                title: title,
                start: start || "1000-01-01T12:00:00.000Z",
                end: end || "1000-01-01T12:00:00.000Z",
                room: room,
                address: address,
                description: description,
                details: details,
                rsvp: rsvp,
                image: image, // @ts-ignore
                modified_by: session?.user.username,
                modified_date: new Date().toISOString(),
              }}
            />
          </div>
        </div>
        {/* Event Fields */}
        <h2 className="font-semibold">Event Fields</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-2 mb-2">
          <input value={title} id="title" placeholder="Title" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setTitle(e.target.value)} />
          <input value={description} id="description" placeholder="Description" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setDescription(e.target.value)} />
          <input value={start} id="start" placeholder="Start Date/Time (YYYY-MM-DDTHH:MM:00.000Z)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setStart(e.target.value)} />
          <input value={end} id="end" placeholder="End Date/Time (Ex: 2024-06-08T12:48:00.000Z)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setEnd(e.target.value)} />
          <input value={room} id="room" placeholder="Room" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setRoom(e.target.value)} />
          <input value={address} id="address" placeholder="Address (Default is Hunter College)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setAddress(e.target.value)} />
          <input value={details} id="details" placeholder="Details Link (Optional)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setDetails(e.target.value)} />
          <input value={rsvp} id="rsvp" placeholder="RSVP Link (Optional)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setRsvp(e.target.value)} />
          <input value={image} id="image" placeholder="Custom Image (Optional)" type="text" className="h-10 w-full p-3 mt-2 rounded-md border bg-white text-szary text-sm outline-none" onChange={(e) => setImage(e.target.value)} />
          <button type="submit" className="h-10 w-full flex items-center bg-srebro px-2 p-1 mt-2 rounded-md hover:bg-czerwony transition duration-200">
            <FaCheck className="h-6 mx-2 text-white"></FaCheck>
            <p className="h-6 text-white px-1">Upload Event</p>
          </button>
        </form>
        {/* Alert */}
        <p className={clsx("h-8 rounded-md border border-czerwony bg-red-200 flex justify-center items-center px-3 text-szary text-sm transition duration-200", { "opacity-100": error === true, "opacity-0": error === false })}>A required field is empty.</p>
      </section>
    </main>
  );
}
