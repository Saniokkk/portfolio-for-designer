//library
import cn from "classnames";

//components
import { Container, Title, Text, CustomLink } from "@/shared";

//styles
import s from "./About.module.scss";

export const About = () => {
    return (
        <section className={s.about} id="about">
            <Container className={s.container}>
                <Title tag="h2-large" className={s.title}>
                    my name is
                </Title>
                <Title tag="h3-italic" className={s.preTitle}>
                    svitlana_lyzanets
                </Title>
                <div className={s.image}></div>
                <Text className={s.text}>
                    <span className={s.space}>
                        Hi, I{"'"}m Svitlana, a UX/UI designer from Ukraine living in Slovakia. I prefer to work with clients who know the gaps and
                        challenges in their business, and I{"'"}m ready to help solve them with my experience and knowledge. My websites are not only
                        attractive, but also encourage users to research and buy.
                    </span>
                    I love experimenting and working on projects that stand out from the competition. I{"'"}m always in touch, easy to adapt and pick
                    up the mood. My ultimate goal is to increase the value of your business.
                </Text>
            </Container>
        </section>
    );
};
