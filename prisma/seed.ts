import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // const password = await hash("password", 12);
  // const user = await prisma.user.upsert({
  //   where: { username: "username" },
  //   update: {},
  //   create: {
  //     username: "username",
  //     password: password,
  //     name: "Firstname Lastname",
  //   },
  // });

  const event = await prisma.event.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "Polish Cultural Club Event 3",
      start: "2024-09-05T16:00:00Z",
      end: "2024-09-05T18:30:00Z",
      room: "Thomas Hunter Hall Room 405",
      address: "695 Park Ave, New York, NY",
      description: "We are delighted to invite our members to our 2024 annual meeting. Join us at the Thomas Hunter Building to hear about what we've established for the club, vote on new club board members, and hear about our plans for the upcoming year.",
      details: "https://www.google.com/",
      rsvp: "https://www.google.com/",
      image: "https://media1.tenor.com/m/j4i0LoRNDLoAAAAC/poland-pl.gif",
      modified_by: "stevensikorski",
      modified_date: new Date().toISOString(),
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
