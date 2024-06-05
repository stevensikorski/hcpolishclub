import { BannerComponent } from "@/components/BannerComponent";
import { DirectoryComponent } from "@/components/DirectoryComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding">
        <DirectoryComponent params={{ group: "About Us", page: "Frequently Asked Questions" }}></DirectoryComponent>
        <TitleComponent params={{ english: "Frequently Asked Questions", polish: "Przywództwo" }}></TitleComponent>
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
