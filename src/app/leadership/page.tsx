import { BannerComponent } from "@/components/BannerComponent";

import { filler } from "@/lib/data";

export default function LeadershipPage() {
  return (
    <main className="page-main">
      <BannerComponent params={{ text: "Leadership" }}></BannerComponent>
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
