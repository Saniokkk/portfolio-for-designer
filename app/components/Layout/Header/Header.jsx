"use client";

//library
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";
import { Logo } from "./components";

//styles
import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={cn(s.header)}>
            <Container className={s.container}>
                <Logo />
            </Container>
        </header>
    );
};
