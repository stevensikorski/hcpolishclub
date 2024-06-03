import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { NavigationButtonProperties } from "@/library/data";

export default function NavigationButton({ params }: { params: NavigationButtonProperties }) {
  if (!params.visible) {
    return null;
  }

  return (
    <li className="relative group">
      {/* Topbar */}
      <div className="relative">
        <a href={params.url || `${params.path} `} className={clsx("block p-5 relative", { "pointer-events-none": params.list === true })}>
          <div className="flex items-center mx-4">
            <p className={clsx("group-hover:text-czerwony transition duration-200", { "font-semibold": params.path === (params.url || "").replace("/", "") || (params.items && Object.keys(params.items).some((key) => params.path === key)) })}>{params.text}</p>
            <FaChevronDown className={clsx("ml-2 h-3 w-3 text-szary group-hover:text-czerwony transition duration-200", { visible: params.list === true, hidden: params.list === false })}></FaChevronDown>
          </div>
        </a>
        {/* Current Page Accent */}
        <span
          className={clsx("absolute inset-x-0 -bottom-[1px] h-[2px] bg-czerwony z-50", {
            block: params.path === (params.url || "").replace("/", "") || (params.items && Object.keys(params.items).some((key) => params.path === key)),
            hidden: !(params.path === (params.url || "").replace("/", "") || (params.items && Object.keys(params.items).some((key) => params.path === key))),
          })}></span>
      </div>
      {/* Dropdown */}
      <ul className={clsx("absolute left-0 w-full bg-white rounded-b-md border-2 -mt-[1px]", { "hidden group-hover:block": params.list === true, hidden: params.list === false })}>
        {params.list && (
          <div className="w-full">
            {Object.keys(params.items).map(
              (key) =>
                params.items[key].visible && (
                  <a key={key} href={params.items[key].url} className="block px-2 rounded-md">
                    <p className="p-2 text-sm hover:text-czerwony transition duration-200">{params.items[key].text}</p>
                  </a>
                )
            )}
          </div>
        )}
      </ul>
    </li>
  );
}
