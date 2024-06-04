import { BannerComponent } from "@/components/BannerComponent";
import { TitleComponent } from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className="page-main">
      <BannerComponent params={{ text: "Frequently Asked Questions" }}></BannerComponent>
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
