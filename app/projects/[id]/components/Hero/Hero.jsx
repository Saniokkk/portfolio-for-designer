import cn from "classnames";
import Image from "next/image";
import { instrumentSerif } from "@/app/fonts";
import { Container, Title } from "@/shared";

import s from "./Hero.module.scss";

export const Hero = ({
  heroData: { mainTitle, year, urlImage, projectType, descriptionAboutCompony },
}) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.topSideWrapper}>
          <Title
            tag="h1"
            className={s.mainTitle}
          >
            {mainTitle}
          </Title>
          <p className={cn(instrumentSerif.className, s.projectType)}>
            <span className={s.year}>{year}</span>
            {projectType}
          </p>
        </div>
        <Image
          className={s.image}
          src={urlImage}
          alt="Preview project"
          width={1248}
          height={750}
        />
        <div className={s.wrapAbout}>
          <p className={s.titleAbout}>About the company</p>
          <p className={s.textAbout}>{descriptionAboutCompony}</p>
        </div>
      </Container>
    </section>
  );
};
