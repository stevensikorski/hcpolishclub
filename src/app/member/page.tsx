import BannerComponent from "@/components/BannerComponent";
import DirectoryComponent from "@/components/DirectoryComponent";
import TitleComponent from "@/components/TitleComponent";

import { filler } from "@/lib/data";

export default function MemberPage() {
  return (
    <main className="page-main">
      <BannerComponent></BannerComponent>
      <section className="page text-padding">
        <DirectoryComponent params={{ group: "Get Involved", page: "Membership" }}></DirectoryComponent>
        <TitleComponent params={{ english: "Membership", polish: "Członkostwo" }}></TitleComponent>
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
