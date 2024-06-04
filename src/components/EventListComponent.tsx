import { useEffect } from "react";

import { TextProperties } from "@/lib/data";

export const EventListComponent = ({ params }: { params: TextProperties }) => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 96;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, []);

  return (
    <li className="ml-[6px] my-2">
      <a href="#" onClick={(e) => handleClick(e, params.text)}>
        <p className="text-srebro text-sm">{params.text}</p>
      </a>
    </li>
  );
};
