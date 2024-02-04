"use client";

//library
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";
import { BurgerMenu, Logo } from "./components";
import { CustomLink, Navigation } from "@/shared";

//styles
import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={cn(s.header)}>
            <Container className={s.container}>
                <Logo />
                <Navigation className={s.nav} />
                <CustomLink additional={true} path="/" className={s.headerButton}>
                    Сontact me
                </CustomLink>
                <BurgerMenu />
            </Container>
        </header>
    );
};
