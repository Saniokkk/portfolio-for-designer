import cn from "classnames";
import s from "./OtherProjects.module.scss";
import smmImg from "@/public/projects/smme.jpg";
import techlightImg from "@/public/projects/techlight.jpg";
import kvitkarniaImg from "@/public/projects/kvitkarnia.jpg";
import a2b_haulImg from "@/public/projects/a2b_haul.jpg";
import { instrumentSans } from "@/app/fonts";
import { CardProject } from "./components/CardProject";
import { Container, Title, Text } from "@/shared";
import OtherProjectsSwiper from "./components/OtherProjectsSwiper";
import { projectData } from "@/data/projectsPage";

export const OtherProjects = ({ data }) => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <Title
          className={cn(instrumentSans.className, s.title)}
          tag="h2"
        >
          <span className={s.innerTitle}>Other</span> projects
        </Title>
      </Container>
      <OtherProjectsSwiper data={data} />
    </section>
  );
};
