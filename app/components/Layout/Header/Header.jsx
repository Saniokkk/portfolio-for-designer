"use client";

//library
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";

//styles
import s from "./Header.module.scss";

export const Header = () => {


  return (
    <header
      className={cn(s.header)}
    >
      <Container></Container>
    </header>
  );
};
