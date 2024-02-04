//library
import Link from "next/link";
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";

//styles
import s from "./Footer.module.scss";
import { instrumentSerif } from "@/app/fonts";

export const Footer = () => {
    return (
        <footer className={cn(s.footer, instrumentSerif.className)}>
            <Container className={s.container}>
                <div className={s.leftSide}>
                    <p class={s.label}>Email:</p>
                    <Link className={s.email} href="mailto:svitlana.lizanets@gmail.com">
                        svitlana.lizanets@gmail.com
                    </Link>
                </div>
                <div className={s.rightSide}>
                    <p className={s.text}>
                        Life is too short for boring websites - <span className={s.italic}>lets create something special together</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
};
