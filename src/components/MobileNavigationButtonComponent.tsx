import { MobileNavigationProperties } from "@/library/data";
import clsx from "clsx";

export default function MobileNavigationButton({ params }: { params: MobileNavigationProperties }) {
  if (!params.visible) {
    return null;
  }

  return (
    <li key={`${params.text}-mobile`} className="py-6 border-b">
      <a href={params.url || "/"} onClick={params.closeMobileNavigation}>
        <p className={clsx("font-semibold text-2xl flex items-center", { "text-czerwony": params.path === (params.url || "/").replace("/", "") || (params.items && Object.keys(params.items).some((key) => params.path === key)), "text-szary": !(params.path === (params.url || "/").replace("/", "") || (params.items && Object.keys(params.items).some((key) => params.path === key))) })}>{params.text}</p>
      </a>
    </li>
  );
}
