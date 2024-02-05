// "use client";

//library and hooks
// import { useRef } from "react";
// import { useInView } from "framer-motion";
import cn from "classnames";

//styles and fonts
import s from "./Text.module.scss";

export const Text = ({ size = "m", children, className, position, translate, ...props }) => {
    // const el = useRef(null);

    //transform - false doesn't use translate or true use
    //transform: isInView ? "none" : translate ? "translateY(100%)" : "",

    //position - textAlign: position === "center" ? "center" : "start", this style text

    // add animate to props and use in key once: animate, - "Necessarily props" only value true or false, you can set setting, when this components Text is rendering.

    //using animation true(one) and false(always) when you see this el in viewport
    // const isInView = useInView(el, {
    //   once: true,
    // });

    return (
        <p
            {...props}
            className={cn(className, {
                [s.s]: size === "s",
                [s.m]: size === "m",
                [s.mSemiBold]: size === "mSemiBold",
                [s.l]: size === "l",
            })}
            // onClick={onClick}
            //style animation
            // style={{
            // textAlign: position === "center" ? "center" : "start",
            //   transform: isInView
            //     ? "none"
            //     : translate === false
            //       ? "none"
            //       : "translateY(100%)",
            //   // opacity: isInView ? 1 : 0,
            //   transition:
            //     "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s, color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
            // }}
            // ref={el}
        >
            {children}
        </p>
    );
};
