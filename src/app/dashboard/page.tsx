import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="page-main">
      <section className="page text-padding invisible desktop:visible">
        <p>Welcome {session?.user?.name}</p>
      </section>
    </main>
  );
}
