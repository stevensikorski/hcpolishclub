import TitleComponent from "@/components/TitleComponent";

export default function Home() {
  return (
    <main className="page-main">
      <section className="page text-padding">
        <TitleComponent english={"Events"} polish={"Wydarzenia"}></TitleComponent>
      </section>
      <section className="page text-padding">
        {/* Upcoming Events */}
        {/* Concluded Events */}
      </section>
    </main>
  );
}
