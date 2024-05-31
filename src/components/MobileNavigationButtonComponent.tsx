import clsx from "clsx";

export default function MobileNavigationButton({ text, url, list, visible, items, path, closeMobileNavigation }: any) {
  if (!visible) {
    return null;
  }

  return (
    <li key={`${text}-mobile`} className="py-6 border-b">
      <a href={url || "/"} onClick={closeMobileNavigation}>
        <p className={clsx("font-semibold text-2xl flex items-center", { "text-czerwony": path === (url || "/").replace("/", "") || (items && Object.keys(items).some((key) => path === key)), "text-szary": !(path === (url || "/").replace("/", "") || (items && Object.keys(items).some((key) => path === key))) })}>{text}</p>
      </a>
    </li>
  );
}
