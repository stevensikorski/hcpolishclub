"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import EventCardComponent from "@/components/EventCardComponent";
import EventMonthComponent from "@/components/EventMonthComponent";
import EventListComponent from "@/components/EventListComponent";

import { events } from "@/library/data";
import { isTimeAfter } from "@/library/utils";
import BannerComponent from "@/components/BannerComponent";

export default function EventsPage() {
  const [isUpcomingOpen, setUpcomingOpen] = useState(true);
  const [isPreviousOpen, setPreviousOpen] = useState(false);

  const toggleUpcoming = () => setUpcomingOpen(!isUpcomingOpen);
  const togglePrevious = () => setPreviousOpen(!isPreviousOpen);

  const currentDate = new Date().toISOString();
  let hasUpcomingEvents = false;
  let hasPreviousEvents = false;

  const upcomingEventComponents = Object.keys(events)
    .reverse()
    .map((item) => {
      const monthEvents = events[item].events;
      const upcomingEvents = monthEvents.filter((event) => isTimeAfter(event.end, currentDate)).reverse();

      if (monthEvents.length === 0 || upcomingEvents.length === 0) {
        return null;
      }

      hasUpcomingEvents = true;

      return (
        <React.Fragment key={item}>
          <EventMonthComponent params={{ text: events[item].text }} />
          {upcomingEvents.map((event, index) => (
            <EventCardComponent
              key={index}
              params={{
                title: event.title,
                start: event.start,
                end: event.end,
                room: event.room,
                address: event.address,
                description: event.description,
                details: event.details,
                rsvp: event.rsvp,
                image: event.image,
              }}
            />
          ))}
        </React.Fragment>
      );
    });

  const previousEventComponents = Object.keys(events)
    .reverse()
    .map((item) => {
      const monthEvents = events[item].events;
      const previousEvents = monthEvents.filter((event) => isTimeAfter(currentDate, event.end)).reverse();

      if (monthEvents.length === 0 || previousEvents.length === 0) {
        return null;
      }

      hasPreviousEvents = true;

      return (
        <React.Fragment key={item}>
          <EventMonthComponent params={{ text: events[item].text }} />
          {previousEvents.map((event, index) => (
            <EventCardComponent
              key={index}
              params={{
                title: event.title,
                start: event.start,
                end: event.end,
                room: event.room,
                address: event.address,
                description: event.description,
                details: event.details,
                rsvp: event.rsvp,
                image: event.image,
              }}
            />
          ))}
        </React.Fragment>
      );
    });

  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page flex text-padding">
        {/* Filter Section */}
        <div className="w-1/4 p-4 flex-col desktop:flex hidden bg-slate-100 rounded-xl border">
          <div>
            <h2 className="font-semibold">Polish Cultural Club</h2>
            <p className="mt-1">Event Navigation</p>
          </div>
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
              <ul className="list-disc text-srebro text-sm ml-4">
                {Object.keys(events)
                  .reverse()
                  .map((item) =>
                    events[item].events
                      .filter((event) => isTimeAfter(event.end, currentDate))
                      .reverse()
                      .map((event) => <EventListComponent key={event.title} params={{ text: event.title }} />)
                  )}
              </ul>
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
              <ul className="list-disc text-srebro text-sm ml-4">
                {Object.keys(events)
                  .reverse()
                  .map((item) =>
                    events[item].events
                      .filter((event) => isTimeAfter(currentDate, event.end))
                      .reverse()
                      .map((event) => <EventListComponent key={event.title} params={{ text: event.title }} />)
                  )}
              </ul>
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
            {hasUpcomingEvents ? (
              upcomingEventComponents
            ) : (
              <li>
                <p className="mb-2">There looks to be no upcoming events.</p>
              </li>
            )}
          </ul>

          {/* Previous Events Section */}
          <ul className="w-full desktop:w-full desktop:p-4">
            <li>
              <h2 className="font-semibold mb-2 text-2xl">Previous Events</h2>
            </li>
            {hasPreviousEvents ? (
              previousEventComponents
            ) : (
              <li>
                <p className="mb-2">There looks to be no previous events.</p>
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
