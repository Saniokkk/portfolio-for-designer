import cn from "classnames";
import s from "./Projects.module.scss";
import { Card } from "./components/Card";
import { projectData } from "@/data/projectsPage";
import { instrumentSans } from "@/app/fonts";
import { Container, Title, Text } from "@/shared";

const { projects } = projectData;

export const Projects = () => {
    return (
        <section className={s.section} id="portfolio">
            <Container className={s.container}>
                <Title className={cn(instrumentSans.className, s.title)} tag="h2">
                    My projects
                </Title>
                <ul className={s.projectsList}>
                    {projects.map((itemData, i) => (
                        <>
                            <Card className={s.card} data={itemData} key={i} />
                        </>
                    ))}
                </ul>
                <Text className={s.description}>
                    I use Figma for my online work, so you&#39;ll always be up to date on the entire process.{" "}
                    <span className={s.accentText}>
                        Your main focus is business development, and my task is to ensure effective digital representation and stand out from the
                        competition. I guarantee to make sure that your business looks impressive and meets your expectations. Let&#39;s craft
                        something truly special and creative together.
                    </span>
                </Text>
            </Container>
        </section>
    );
};
