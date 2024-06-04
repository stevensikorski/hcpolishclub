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
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
