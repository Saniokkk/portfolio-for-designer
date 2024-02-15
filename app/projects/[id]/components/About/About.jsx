//library
import Image from "next/image";

//components

//styles
import { Container } from "@/shared";
import s from "./About.module.scss";

export const About = ({ data }) => {
    const { description, images } = data;
    return (
        <section className={s.about}>
            <Container>
                <ul className={s.list}>
                    {images.map((el, i) => (
                        <li className={s.item} key={i}>
                            <Image
                                alt="Images About"
                                src={el}
                                sizes="(max-width: 375px) 296px 219px, (max-width: 768px) 768px 571px, (max-width: 1440px) 1248px, 296px"
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};
