import { LanguageProperties } from "@/lib/data";

export const TitleComponent = ({ params }: { params: LanguageProperties }) => {
  return (
    <section className="page text-padding">
      <h1 className="text-center font-semibold">{params.english}</h1>
      <p className="mt-2 text-center">{params.polish}</p>
      {/* <hr className="text-padding"></hr> */}
    </section>
  );
};

export default TitleComponent;
