//library
import Link from "next/link";
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";
import { SocialMediaList } from "@/shared";

//styles
import s from "./Footer.module.scss";
import { instrumentSerif, instrumentSans } from "@/app/fonts";

export const Footer = () => {
    return (
        <footer className={cn(s.footer, instrumentSerif.className)}>
            <Container className={s.container}>
                <div className={s.leftSide}>
                    <p class={s.labelEmail}>Email:</p>
                    <Link className={s.email} href="mailto:svitlana.lizanets@gmail.com">
                        svitlana.lizanets@gmail.com
                    </Link>
                </div>
                <div className={s.rightSide}>
                    <p className={s.text}>
                        Life is too short for boring websites - <span className={s.italic}>let{"'"}s create something special together</span>
                    </p>
                    <SocialMediaList />
                </div>
                <h2 className={s.title}>
                    Design <span className={s.italic}>Studio</span>
                </h2>
                <p className={cn(s.copyright, instrumentSans.className)}>© 2024. Copyright and design Svitlana Lyzanets</p>
            </Container>
        </footer>
    );
};
