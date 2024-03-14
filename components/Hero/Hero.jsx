//library
import cn from "classnames";

//components
import { Container } from "@/shared/Container/Container";
import { Title, Text, CustomLink, SocialMediaList } from "@/shared";

//styles
import s from "./Hero.module.scss";

export const Hero = () => {
    return (
        <section className={s.hero}>
            <Container className={s.container}>
                <Title tag="h1" className={s.title}>
                    Your <span className={s.normalStyle}>creative</span> <span className={s.image}>designer </span> Your
                    <span className={s.normalStyle}> Business</span> Success
                </Title>
                <div className={s.afterTitleBlock}>
                    <SocialMediaList name="icon" className={s.listSocial} />
                    <div className={s.innerText}>
                        <Text className={s.preTitle}>
                            Websites for business that impress, persuade and sell. Creative and unique design with a focus on user and customer
                            experience. I know consumers well, understand business objectives and create effective solutions.
                        </Text>
                        <CustomLink path="#services" additional={true} className={s.button}>
                            my services
                        </CustomLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};
