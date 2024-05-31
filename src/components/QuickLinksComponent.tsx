import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function QuickLinkComponent({ text, url, list, visible, items, path }: any) {
  return (
    <li>
      <a key={`${text}-quicklink`} href={url} className="flex group">
        <MdOutlineKeyboardArrowRight className="footer-icon"></MdOutlineKeyboardArrowRight>
        <p className="footer-text footer-link">{text}</p>
      </a>
    </li>
  );
}
