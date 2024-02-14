import { projectData } from "@/data/projectsPage";
import { Hero, About, OtherProjects } from "./components";

export default function ProjectPage({ params }) {
    const { hero, projects, about } = projectData;
    const otherProjects = projects.filter((project) => project.id !== Number(params.id));

    return (
        <>
            My Post: {params.id}
            <Hero heroData={hero}></Hero>
            <About data={about} />
            <OtherProjects data={otherProjects} />
        </>
    );
}
