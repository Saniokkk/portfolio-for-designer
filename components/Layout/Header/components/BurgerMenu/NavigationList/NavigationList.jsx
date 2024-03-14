//library
import { motion } from "framer-motion";
import cn from "classnames";
import Link from "next/link";

//styles
import { instrumentSerif } from "@/app/fonts";
import s from "./NavigationList.module.scss";

const textArray = [
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

const itemVariants = {
    show: { opacity: 1, y: "0%" },
    hidden: { opacity: 0, y: "-100%" },
};

export const NavigationList = ({ active, onClick }) => {
    return (
        <>
            <ul initial="hidden" animate="show" className={cn(s.list)}>
                {textArray.map((el, i) => (
                    <motion.li
                        key={i}
                        animate={active ? "show" : "hidden"}
                        transition={{ delay: 0.1 * i, type: "spring" }}
                        variants={itemVariants}
                        onClick={onClick}
                        className={cn(s.item)}>
                        <Link className={cn(s.link, instrumentSerif.className)} href={`#${el.id}`}>
                            {el.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </>
    );
};
