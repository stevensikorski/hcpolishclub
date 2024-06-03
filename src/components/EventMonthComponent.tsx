import { TextProperties } from "@/library/data";

export default function EventMonthComponent({ params }: { params: TextProperties }) {
  return (
    <div className="flex items-center">
      <h2 className="whitespace-nowrap text-sm tablet:text-base text-szary">{params.text}</h2>
      <div className="flex-grow border ml-4"></div>
    </div>
  );
}
