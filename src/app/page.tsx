import Image from "next/image";
import { filler } from "@/lib/data";

export default function Home() {
  return (
    <main className="page-main">
      <section className="full h-landing w-full">
        <div className="relative h-landing w-full flex flex-col justify-center items-center desktop:items-start overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-czerwony via-czerwony/50 to-transparent backdrop-blur z-10"></div>
          <Image src="/Hunter.jpeg" alt="Image" fill priority style={{ objectFit: "cover", objectPosition: "bottom" }} className="absolute inset-0" />
          <h3 className="relative z-20 text-slate-50 text-xl tablet:text-3xl desktop:ml-32">Welcome to the</h3>
          <h1 className="relative z-20 text-slate-50 text-3xl tablet:text-[4rem] desktop:ml-32 tablet:my-4 font-semibold">Polish Cultural Club</h1>
          <h2 className="relative z-20 text-slate-50 text-lg tablet:text-2xl desktop:ml-32 font-light">CUNY Hunter College</h2>
        </div>
      </section>
      <section className="page text-padding min-h-screen">
        <p className="page-text">{filler.text}</p>
        <p className="page-text">{filler.text}</p>
      </section>
    </main>
  );
}
