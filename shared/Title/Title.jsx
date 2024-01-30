"use client";

//library and hooks
import { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";

//styles
import s from "./Title.module.scss";

export const Title = ({ tag, className, children, translate }) => {
    const el = useRef(null);

    //transform - false doesn't use translate or true use
    //transform: isInView ? "none" : translate ? "translateY(100%)" : "",

    //animate - "Necessarily props" only value true or false, you can set setting, when this components Text is rendering.

    //using animation true(one) and false(always) when you see this el in viewport
    // const isInView = useInView(el, {
    //     once: true,
    // });

    switch (tag) {
        case "h1":
            return <h1 className={cn(className, s.h1)}>{children}</h1>;
        case "h2":
            return <h2 className={cn(className, s.h2)}>{children}</h2>;
        case "h3":
            return <h3 className={cn(className, s.h3)}>{children}</h3>;
        default:
            return <></>;
    }
};
