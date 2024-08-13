import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/options";

export async function GET(request: Request) {
  const events = await prisma.event.findMany();
  if (!events) {
    return new NextResponse(JSON.stringify({ error: "empty" }), { status: 404 });
  }
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

  await prisma.event.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Event deleted successfully" });
}
