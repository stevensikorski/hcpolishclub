import { BannerComponent } from "@/components/BannerComponent";
import { DirectoryComponent } from "@/components/DirectoryComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding">
        <DirectoryComponent params={{ group: "Members", page: "Community" }}></DirectoryComponent>
        <TitleComponent params={{ english: "Community", polish: "Społeczność" }}></TitleComponent>
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
