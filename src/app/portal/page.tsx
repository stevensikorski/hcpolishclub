import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/options";
import { User } from "../user";
import { LoginButton, LogoutButton } from "../auth";

export default async function PortalPage() {
  const user = await prisma.user.findFirst({
    where: {
      username: "stevensikorski",
    },
  });

  const session = await getServerSession(authOptions);

  return (
    <main className="page-main">
      <section className="page text-padding">
        <p className="page-text">This is the dashboard page.</p>
        <p>Hello, {user?.name}</p>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        <h2>Server Session</h2>
        <pre>{JSON.stringify(session)}</pre>
        <h2>Client Call</h2>
        <User></User>
      </section>
    </main>
  );
}
