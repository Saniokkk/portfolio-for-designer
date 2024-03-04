//library
import cn from "classnames";
import Link from "next/link";

//styles
import s from "./Navigation.module.scss";

//text to navigation element
const data = [
    {
        name: "About me",
        id: "about",
    },
    {
        name: "Services",
        id: "services",
    },
    {
        name: "Portfolio",
        id: "portfolio",
    },
];

export const Navigation = ({ className }) => {
    return (
        <ul className={cn(s.list, className)}>
            {data.map((el, i) => (
                <li key={i} className={cn(s.item)}>
                    <Link href={`/#${el.id}`} className={cn(s.link)}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
