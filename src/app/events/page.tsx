"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import EventCardComponent from "@/components/EventCardComponent";
import EventMonthComponent from "@/components/EventMonthComponent";
import EventListComponent from "@/components/EventListComponent";
import BannerComponent from "@/components/BannerComponent";
import { EventProperties } from "@/lib/data";
import { isTimeAfter } from "@/lib/utils";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [isUpcomingOpen, setUpcomingOpen] = useState(false);
  const [isPreviousOpen, setPreviousOpen] = useState(false);
  const toggleUpcoming = () => setUpcomingOpen(!isUpcomingOpen);
  const togglePrevious = () => setPreviousOpen(!isPreviousOpen);
  const currentDate = new Date().toISOString();

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

          const upcomingList = data.events.filter((event: EventProperties) => isTimeAfter(event.start, new Date().toISOString()));
          if (upcomingList.length !== 0) {
            setUpcomingOpen(true);
          }
        }
      } catch (error) {}
    })();
  }, []);

  const groupEventsByMonth = (events: EventProperties[]) => {
    return events.reduce((acc: any, event: EventProperties) => {
      const date = new Date(event.start);
      const monthYear = date.toLocaleString("default", { month: "long", year: "numeric" });
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(event);
      return acc;
    }, {});
  };

  const sortEventsByDateDesc = (events: EventProperties[]) => {
    return events.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
  };

  const upcomingEvents = sortEventsByDateDesc(events.filter((event) => isTimeAfter(event.start, currentDate)));
  const previousEvents = sortEventsByDateDesc(events.filter((event) => !isTimeAfter(event.start, currentDate)));
  const groupedUpcomingEvents = groupEventsByMonth(upcomingEvents);
  const groupedPreviousEvents = groupEventsByMonth(previousEvents);

  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding flex min-h-screen">
        {/* Navigation Section */}
        <div className="w-1/4 p-4 hidden desktop:flex flex-col bg-white">
          <h2 className="font-semibold">Polish Cultural Club</h2>
          <p className="mt-1">Event Navigation</p>
          <hr></hr>
          {/* Upcoming Section */}
          <section>
            {/* Upcoming Events Button */}
            <button onClick={toggleUpcoming} className="flex group">
              <motion.div initial={{ rotate: isUpcomingOpen ? 0 : -90 }} animate={{ rotate: isUpcomingOpen ? 0 : -90 }} transition={{ duration: 0.2 }}>
                <MdOutlineKeyboardArrowDown className="size-5 tablet:size-6 text-szary group-hover:text-czarny transition duration-200" />
              </motion.div>
              <p className="text-sm tablet:text-base group-hover:text-czarny font-semibold transition duration-200">Upcoming</p>
            </button>

            {/* Upcoming Events List */}
            <motion.div initial={{ height: "auto", opacity: 1 }} animate={{ height: isUpcomingOpen ? "auto" : 0, opacity: isUpcomingOpen ? 1 : 0 }} transition={{ height: { duration: 0.2 }, opacity: { duration: 0.2 } }} className="overflow-hidden mt-2">
              <ul className="list-disc text-srebro text-sm ml-4">{Object.keys(groupedUpcomingEvents).map((month) => groupedUpcomingEvents[month].filter((event: any) => isTimeAfter(event.start, currentDate)).map((event: any) => <EventListComponent key={event.id} params={{ text: event.title }} />))}</ul>
            </motion.div>
          </section>

          <hr></hr>

          {/* Previous Section */}
          <section>
            {/* Previous Events Button */}
            <button onClick={togglePrevious} className="flex group">
              <motion.div initial={{ rotate: isPreviousOpen ? 0 : -90 }} animate={{ rotate: isPreviousOpen ? 0 : -90 }} transition={{ duration: 0.2 }}>
                <MdOutlineKeyboardArrowDown className="size-5 tablet:size-6 text-szary group-hover:text-czarny transition duration-200" />
              </motion.div>
              <p className="text-sm tablet:text-base group-hover:text-czarny font-semibold transition duration-200">Previous</p>
            </button>

            {/* Previous Events List */}
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isPreviousOpen ? "auto" : 0, opacity: isPreviousOpen ? 1 : 0 }} transition={{ height: { duration: 0.2 }, opacity: { duration: 0.2 } }} className="overflow-hidden mt-2">
              <ul className="list-disc text-srebro text-sm ml-4">{Object.keys(groupedPreviousEvents).map((month) => groupedPreviousEvents[month].filter((event: any) => !isTimeAfter(event.start, currentDate)).map((event: any) => <EventListComponent key={event.id} params={{ text: event.title }} />))}</ul>
            </motion.div>
          </section>
        </div>

        {/* Event Section */}
        <div className="flex flex-col w-full desktop:w-3/4 desktop:ml-4">
          {/* Upcoming Events Section */}
          <ul className="w-full desktop:w-full desktop:p-4">
            <li>
              <h2 className="font-semibold mb-2 text-2xl">Upcoming Events</h2>
            </li>
            {upcomingEvents.length === 0 ? (
              <li>
                <p className="mb-2">There looks to be no upcoming events.</p>
              </li>
            ) : (
              Object.keys(groupedUpcomingEvents).map((month) => (
                <div key={month}>
                  <EventMonthComponent params={{ text: month }} />
                  {groupedUpcomingEvents[month].map((event: any, index: any) => (
                    <EventCardComponent
                      key={index}
                      params={{
                        id: event.id,
                        title: event.title,
                        start: event.start,
                        end: event.end,
                        room: event.room,
                        address: event.address,
                        description: event.description,
                        details: event.details,
                        rsvp: event.rsvp,
                        image: event.image,
                        modified_by: event.modified_by,
                        modified_date: event.modified_date,
                      }}
                    />
                  ))}
                </div>
              ))
            )}
          </ul>

          {/* Previous Events Section */}
          <ul className="w-full desktop:w-full desktop:p-4">
            <li>
              <h2 className="font-semibold mb-2 text-2xl">Previous Events</h2>
            </li>
            {previousEvents.length === 0 ? (
              <li>
                <p className="mb-2">There looks to be no previous events.</p>
              </li>
            ) : (
              Object.keys(groupedPreviousEvents).map((month) => (
                <div key={month}>
                  <EventMonthComponent params={{ text: month }} />
                  {groupedPreviousEvents[month].map((event: any, index: any) => (
                    <EventCardComponent
                      key={index}
                      params={{
                        id: event.id,
                        title: event.title,
                        start: event.start,
                        end: event.end,
                        room: event.room,
                        address: event.address,
                        description: event.description,
                        details: event.details,
                        rsvp: event.rsvp,
                        image: event.image,
                        modified_by: event.modified_by,
                        modified_date: event.modified_date,
                      }}
                    />
                  ))}
                </div>
              ))
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
