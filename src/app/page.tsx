import Image from "next/image";

import { filler } from "@/lib/data";
export default function Home() {
  return (
    <main className="page-main">
      <section className={`full h-landing w-full`}>
        <div className={`relative h-landing w-full bg-czerwony flex flex-col justify-center text-center items-center`}>
          <Image src="/Hunter.jpeg" alt="Image" fill priority style={{ objectFit: "cover", objectPosition: "bottom" }} className="absolute inset-0 z-0 grayscale opacity-25"></Image>
        </div>
      </section>
      <section className="page text-padding">
        <p className="page-text">{filler.text}</p>
        <p className="page-text">{filler.text}</p>
      </section>
    </main>
  );
}
