import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import NodeCache from "node-cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/options";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET(request: Request) {
  const key = "events";

  const cachedEvents = cache.get(key);
  if (cachedEvents) {
    console.log("Using cached data");
    return NextResponse.json({ events: cachedEvents });
  }

  const events = await prisma.event.findMany();
  if (!events) {
    console.log("Error");
    return new NextResponse(JSON.stringify({ error: "empty" }), { status: 404 });
  }
  cache.set(key, events);
  console.log("Using prisma data");
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  const { title, start, end, room, address, description, details, rsvp, image, modified_by, modified_date } = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  if (!title || !room || !description) {
    return new NextResponse(JSON.stringify({ error: "a required field is empty" }), { status: 400 });
  }

  const event = await prisma.event.create({
    data: {
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
    },
  });

  const key = "events";
  const cachedEvents = cache.get(key);
  if (cachedEvents) {
    cache.del(key);
  }

  return NextResponse.json({
    event: {
      id: event.id,
    },
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  if (!id) {
    return new NextResponse(JSON.stringify({ error: "id is required" }), { status: 400 });
  }

  const event = await prisma.event.delete({
    where: { id },
  });

  const key = "events";
  const cachedEvents = cache.get(key);
  if (cachedEvents) {
    cache.del(key);
  }

  return NextResponse.json({ message: "Event deleted successfully" });
}
