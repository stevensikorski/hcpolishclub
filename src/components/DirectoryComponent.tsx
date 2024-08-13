import { DirectoryProperties } from "@/lib/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const DirectoryComponent = ({ params }: { params: DirectoryProperties }) => {
  return (
    <section className="my-6">
      <div className="flex items-center">
        <p className="text-srebro text-xs tablet:text-sm">{params.group}</p>
        <MdOutlineKeyboardArrowRight className="size-4 tablet:size-5 text-srebro"></MdOutlineKeyboardArrowRight>
        <p className="text-szary text-xs tablet:text-sm underline">{params.page}</p>
      </div>
    </section>
  );
};

export default DirectoryComponent;
