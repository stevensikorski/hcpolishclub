import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { EventProperties } from "@/library/data";
import { formatTime } from "@/library/utils";

export default function EventCardComponent({ params }: { params: EventProperties }) {
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const startDate = new Date(params.start);
  const endDate = new Date(params.end);

  const startTime = formatTime(startDate);
  const endTime = formatTime(endDate);
  const day = startDate.getDate();
  const month = monthsOfYear[startDate.getUTCMonth()];
  const weekday = daysOfWeek[startDate.getDay()];
  const WEEKDAY = weekday.substring(0, 3).toUpperCase();

  return (
    <li id={params.title} className="h-72 w-full border rounded-xl flex my-6 desktop:my-8 bg-slate-100">
      {/* Calendar Section */}
      <div className="h-full flex flex-col justify-center items-center text-center border-r rounded-l-xl">
        <p className="text-sm text-czerwony mx-6">{WEEKDAY}</p>
        <p className="text-2xl font-semibold text-czarny mx-6 pb-1">{day}</p>
      </div>

      {/* Details Section */}
      <div className="w-full p-6 flex flex-col h-full bg-white rounded-r-xl desktop:rounded-none">
        <div className="flex-grow">
          <p className="text-srebro text-xs desktop:text-sm">
            {weekday} {month} {day} @ {startTime} - {endTime}
          </p>
          <h2 className="text-czarny text-base desktop:text-xl font-semibold my-1">{params.title}</h2>
          <p className="text-szary text-sm font-semibold">{params.room}</p>
          <p className="text-szary text-sm">{params.address}</p>
          <br />
          <p className="text-gray-500 text-sm overflow-hidden line-clamp-3">{params.description}</p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Link href={params.details} target="_blank" className={clsx("flex items-center bg-srebro p-1 rounded-md hover:bg-czerwony transition duration-200", { hidden: !params.details })}>
            <MdOutlineKeyboardArrowRight className="size-5 text-white"></MdOutlineKeyboardArrowRight>
            <p className="pr-1 text-white">Details</p>
          </Link>
          <Link href={params.rsvp} target="_blank" className={clsx("flex items-center bg-srebro p-1 rounded-md hover:bg-czerwony transition duration-200", { hidden: !params.rsvp })}>
            <MdOutlineKeyboardArrowRight className="size-5 text-white"></MdOutlineKeyboardArrowRight>
            <p className="pr-1 text-white">RSVP</p>
          </Link>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className="w-64 p-6 relative bg-czerwony border-l rounded-r-xl hidden desktop:flex">
        <Image src={params.image || "/Hunter.jpeg"} alt="Image" fill unoptimized style={{ objectFit: "cover" }} className="absolute inset-0 z-5 rounded-r-xl grayscale opacity-25"></Image>
      </div>
    </li>
  );
}
