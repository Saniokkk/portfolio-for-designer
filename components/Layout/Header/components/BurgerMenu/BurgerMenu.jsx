"use client";

//library
import { useState } from "react";
import { motion } from "framer-motion";

//components
import { Icon } from "@/shared/Icon/Icon";
import { Logo } from "../index";
import { NavigationList } from "./NavigationList/NavigationList";
import { Contacts } from "./Contacts/Contacts";

//styles
import s from "./BurgerMenu.module.scss";

//animate variables
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
};

export const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={s.burger}>
            <button onClick={handleClick} className={s.burger_button}>
                menu
            </button>
            <motion.div
                transition={{ delay: 0.1, type: "just" }}
                animate={isActive ? "open" : "closed"}
                variants={variants}
                className={s.burger_wrapper}
                initial={{ opacity: 0, x: "100%" }}>
                <div className={s.container}>
                    <div className={s.innerNavigation}>
                        <Logo />
                        <button onClick={handleClick} className={s.close}>
                            <Icon name="close" width="24" height="24" />
                        </button>
                    </div>
                    <NavigationList active={isActive} onClick={handleClick} />
                    <Contacts />
                </div>
            </motion.div>
        </div>
    );
};
