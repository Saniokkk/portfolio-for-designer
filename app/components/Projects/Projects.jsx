import { Container, Title, Text } from "@/shared";
import { Card } from "./components/Card";
import cn from "classnames";
import s from "./Projects.module.scss";
import smmImg from "@/public/projects/smme.jpg";
import techlightImg from "@/public/projects/techlight.jpg";
import kvitkarniaImg from "@/public/projects/kvitkarnia.jpg";
import { instrumentSans } from "@/app/fonts";

const data = [
  {
    id: 1,
    srcImg: smmImg,
    name: "SMME",
    description: "UI/UX Design, Multipage site",
  },
  {
    id: 2,
    srcImg: techlightImg,
    name: "Techlight ",
    description: "UI/UX Design, E-commerce",
  },
  {
    id: 3,
    srcImg: kvitkarniaImg,
    name: "A2b haul",
    description: "UI/UX Design, Multipage site",
  },
  {
    id: 4,
    srcImg: kvitkarniaImg,
    name: "Kvitkarnia",
    description: "UI/UX Design, Multipage site",
  },
];

export const Projects = () => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <Title
          className={cn(instrumentSans.className, s.title)}
          tag="h2"
        >
          My projects
        </Title>
        <ul className={s.projectsList}>
          {data.map((itemData, i) => (
            <>
              <Card
                className={s.card}
                data={itemData}
                key={i}
              />
            </>
          ))}
        </ul>
        <Text className={s.description}>I use Figma for my online work, so you&#39;ll always be up to date on the entire process. <span className={s.accentText}>Your main focus is business development, and my task is to ensure effective digital representation and stand out from the competition. I guarantee to make sure that your business looks impressive and meets your expectations. Let&#39;s craft something truly special and creative together.</span></Text>
      </Container>
    </section>
  );
};
