import { TitleProperties } from "@/lib/data";

export const TitleComponent = ({ params }: { params: TitleProperties }) => {
  return (
    <section className="my-6">
      <h1 className="font-semibold">{params.english}</h1>
      <p className="mt-2 pb-6">{params.polish}</p>
      <hr></hr>
    </section>
  );
};

export default TitleComponent;
