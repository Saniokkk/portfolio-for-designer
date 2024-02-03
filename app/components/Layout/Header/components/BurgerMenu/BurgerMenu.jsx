"use client";

//library
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";

//icons
import { Icon } from "@/shared/Icon/Icon";

//styles
import s from "./BurgerMenu.module.scss";
import { Container } from "@/shared/Container/Container";
import { Text } from "@/shared/Text/Text";

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

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
};

const itemVariants = {
    show: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "100%" },
};

export const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    // const goToSection = (sectionId) => {
    //   const section = document.getElementById(sectionId);

    //   const offsetTop = section.offsetTop;
    //   window.scrollTo({
    //     bottom: offsetTop,
    //     behavior: "smooth",
    //   });
    // };

    return (
        <div className={s.burger}>
            <button onClick={handleClick} className={s.burger_button}></button>

            <motion.div
                transition={{ delay: 0.1, type: "just" }}
                animate={isActive ? "open" : "closed"}
                variants={variants}
                className={s.burger_wrapper}
                initial={{ opacity: 0, x: "100%" }}>
                <Container className={s.container}>
                    <button onClick={handleClick} className={s.close}>
                        <Icon name="close" width="48" height="48" />
                    </button>
                    <ul initial="hidden" animate="show" className={cn(s.list)}>
                        {textArray.map((el, i) => (
                            <motion.li
                                key={i}
                                animate={isActive ? "show" : "hidden"}
                                transition={{ delay: 0.1 * i, type: "spring" }}
                                variants={itemVariants}
                                onClick={handleClick}
                                className={cn(s.item, s.last)}>
                                <Link className={s.link} href={`#${el.id}`}>
                                    {el.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </Container>
            </motion.div>
        </div>
    );
};
