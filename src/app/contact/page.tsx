import { BannerComponent } from "@/components/BannerComponent";

import { filler } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="page-main">
      <BannerComponent params={{ text: "Contact Us" }}></BannerComponent>
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
