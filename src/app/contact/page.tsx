import BannerComponent from "@/components/BannerComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/library/data";

export default function Home() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <TitleComponent english={"Contact Us"} polish={"Skontaktuj Się Z Nami"}></TitleComponent>
      <section className="page text-padding">
        <p className="page-text">{filler.text}</p>
        <p className="page-text">{filler.text}</p>
        <p className="page-text">{filler.text}</p>
        <p className="page-text">{filler.text}</p>
        <hr></hr>
        <p className="page-text">{filler.text}</p>
      </section>
    </main>
  );
}
