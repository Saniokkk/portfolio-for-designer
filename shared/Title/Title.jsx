"use client";

//library and hooks
import { useRef } from "react";
import cn from "classnames";

//styles
import { instrumentSerif } from "../../app/fonts";
import s from "./Title.module.scss";

export const Title = ({ tag = "h2", className, children, translate }) => {
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
      return (
        <h1 className={cn(instrumentSerif.className, s.h1, className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(instrumentSerif.className, s.h2, className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(instrumentSerif.className, s.h3, className)}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
