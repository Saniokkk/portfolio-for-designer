import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "./Navigation.module.scss";
import { Text } from "@/shared/Text/Text";

const homepage = [
  {
    name: "About",
    path: "about",
  },
  {
    name: "New",
    path: "new",
  },
  {
    name: "Corsets",
    path: "corsets",
  },
  {
    name: "Dresses",
    path: "dresses",
  },
  {
    name: "Terms",
    path: "terms",
  },
  {
    name: "Note",
    path: "note",
  },
  {
    name: "Order",
    path: "order",
  },
  {
    name: "Contacts",
    path: "contacts",
  },
];

const otherPage = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New",
    path: "/new",
  },
  {
    name: "Corsets",
    path: "/corsets",
  },
  {
    name: "Dresses",
    path: "/dresses",
  },
  {
    name: "Order",
    path: "#order",
  },
  {
    name: "Contacts",
    path: "#contacts",
  },
];

export const Navigation = ({ className, page }) => {
  const path = usePathname();

  return (
    <ul className={cn(s.list, className)}>
      {page === "home" &&
        homepage.map((el, i) => (
          <li key={i} className={cn(s.item)}>
            <Link
              href={`#${el.path}`}
              className={cn(s.link, {
                [s.active]: path.includes(el.name.toLowerCase()),
              })}
            >
              {el.name}
            </Link>
          </li>
        ))}
      {page === "other" &&
        otherPage.map((el, i) => (
          <li key={i} className={s.item}>
            <Link
              href={`${el.path}`}
              className={cn(s.link, {
                [s.active]: path.includes(el.name.toLowerCase()),
              })}
              size="nav"
            >
              {el.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};
