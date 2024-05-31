import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { NavigationButtonProperties } from "@/library/data";

export default function NavigationButton({ text, url, list, visible, items, path }: NavigationButtonProperties) {
  if (!visible) {
    return null;
  }

  return (
    <li className="relative group">
      {/* Topbar */}
      <div className="relative">
        <a href={url || `${path} `} className={clsx("block p-5 relative", { "pointer-events-none": list === true })}>
          <div className="flex items-center mx-4">
            <p className="font-semibold group-hover:text-czerwony">{text}</p>
            <FaChevronDown className={clsx("ml-2 h-3 w-3 text-szary group-hover:text-czerwony", { visible: list === true, hidden: list === false })}></FaChevronDown>
          </div>
        </a>
        {/* Current Page Accent */}
        <span
          className={clsx("absolute inset-x-0 -bottom-[1px] h-[2px] bg-czerwony z-40", {
            block: path === (url || "").replace("/", "") || (items && Object.keys(items).some((key) => path === key)),
            hidden: !(path === (url || "").replace("/", "") || (items && Object.keys(items).some((key) => path === key))),
          })}></span>
      </div>
      {/* Dropdown */}
      <ul className={clsx("absolute left-0 w-full bg-white rounded-b-md border-2 shadow-lg -mt-[1px]", { "hidden group-hover:block": list === true, hidden: list === false })}>
        {list && (
          <div className="w-full">
            {Object.keys(items).map(
              (key) =>
                items[key].visible && (
                  <a key={key} href={items[key].url} className="block px-2 rounded-md">
                    <p className="p-2 text-sm hover:text-czerwony">{items[key].text}</p>
                  </a>
                )
            )}
          </div>
        )}
      </ul>
    </li>
  );
}
