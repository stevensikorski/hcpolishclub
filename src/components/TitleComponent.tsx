export default function TitleComponent({ english, polish }: any) {
  return (
    <section className="page text-padding">
      <h1 className="text-center font-semibold">{english}</h1>
      <p className="mt-2 text-center">{polish}</p>
      <hr className="text-padding"></hr>
    </section>
  );
}
