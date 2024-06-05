import BannerComponent from "@/components/BannerComponent";
import DirectoryComponent from "@/components/DirectoryComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function HistoryPage() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding">
        <DirectoryComponent params={{ group: "About Us", page: "History" }}></DirectoryComponent>
        <TitleComponent params={{ english: "History", polish: "Historia" }}></TitleComponent>
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
