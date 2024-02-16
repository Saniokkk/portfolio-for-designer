import { projectData } from "@/data/projectsPage";
import { Hero, About, OtherProjects, Result } from "./components";

export default function ProjectPage({ params }) {
    const { hero, projects, about, result } = projectData;
    const otherProjects = projects.filter((project) => project.id !== Number(params.id));

    return (
        <>
            My Post: {params.id}
            <Hero heroData={hero}></Hero>
            <About data={about} mainTitle={hero.mainTitle} />
            <Result data={result} />
            <OtherProjects data={otherProjects} />
        </>
    );
}
