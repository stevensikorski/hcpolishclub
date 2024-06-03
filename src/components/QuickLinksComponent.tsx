import { QuickLinkProperties } from "@/library/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function QuickLinkComponent({ params }: { params: QuickLinkProperties }) {
  if (!params.visible) {
    return null;
  }
  return (
    <li>
      <a key={`${params.text}-quicklink`} href={params.url || "/"} className="flex group">
        <MdOutlineKeyboardArrowRight className="footer-icon"></MdOutlineKeyboardArrowRight>
        <p className="footer-text footer-link">{params.text}</p>
      </a>
    </li>
  );
}
