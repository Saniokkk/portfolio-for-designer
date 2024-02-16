import cn from "classnames";
import Image from "next/image";
// import { instrumentSerif } from "@/app/fonts";
import { Container } from "@/shared";

import s from "./Result.module.scss";

export const Result = ({
    data: { firstImgResult, secondImgResult, description, previewImgResult },
}) => {
  return (
    <section className={s.section}>
      <div className={s.topSideWrapper}>
        <Image
          className={s.image}
          src={firstImgResult}
          alt="Preview project"
          width={768}
          height={610}
        />
        <Image
          className={s.image}
          src={secondImgResult}
          alt="Preview project"
          width={768}
          height={730}
        />
      </div>
      <Container>
        <div className={s.wrapAbout}>
          <h2 className={s.titleAbout}>Result</h2>
          <p className={s.textAbout}>{description}</p>
        </div>
      </Container>
      <Image
        className={s.imagePreview}
        src={previewImgResult}
        alt="Preview project"
        width={1440}
        height={1000}
      />
    </section>
  );
};
