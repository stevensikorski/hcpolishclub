import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import NodeCache from "node-cache";

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
