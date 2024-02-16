//library
import Image from "next/image";
import cn from "classnames";


//components

//styles
import { Container } from "@/shared";
import s from "./About.module.scss";
import { DescriptionSection } from "@/shared/DescriptionSection/DescriptionSection";

import { instrumentSerif } from "@/app/fonts";

export const About = ({ data, mainTitle }) => {
  const { description, images } = data;
  return (
    <section className={s.about}>
      <div className={s.topSideWrapper}>
        <Image
          className={s.image}
          src={images[0]}
          alt="Preview project"
          width={768}
          height={610}
        />
        <Image
          className={s.image}
          src={images[1]}
          alt="Preview project"
          width={768}
          height={730}
        />
      </div>
      <Container>
        <DescriptionSection
          title={"My task"}
          description={description}
        />
        <div className={s.wrapPreview}>
          <p className={cn(instrumentSerif.className, s.decorText)}>
            {mainTitle}&nbsp;Website&nbsp;{mainTitle}&nbsp;Website
          </p>
          <Image
            className={s.imagePreview}
            src={images[2]}
            alt="Preview project"
            width={552}
            height={1982}
          />
          <Image
            className={s.imagePreview}
            src={images[3]}
            alt="Preview project"
            width={560}
            height={1249}
          />
        </div>
      </Container>
    </section>
  );
};
