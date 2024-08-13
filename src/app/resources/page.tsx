import BannerComponent from "@/components/BannerComponent";
import DirectoryComponent from "@/components/DirectoryComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding min-h-screen">
        <DirectoryComponent params={{ group: "Get Involved", page: "Resources" }}></DirectoryComponent>
        <TitleComponent params={{ english: "Resources", polish: "Zasoby" }}></TitleComponent>
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
