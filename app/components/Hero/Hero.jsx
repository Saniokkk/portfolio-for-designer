//library
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";
import { Title } from "@/shared";

//styles
import s from "./Hero.module.scss";

export const Hero = () => {
    return (
        <section className={s.hero}>
            <Container>
                <Title tag="h1" className={s.title}>
                    Your creative designer Your Business Success
                </Title>
            </Container>
        </section>
    );
};
