import { projectData } from "@/data/projectsPage";
import { Hero, OtherProjects } from "./components";

export default function ProjectPage({ params }) {
  const { hero, projects } = projectData;
  const otherProjects = projects.filter(
    (project) => project.id !== Number(params.id)
  );

  return (
    <>
      My Post: {params.id}
      <Hero heroData={hero}></Hero>
      <OtherProjects data={otherProjects} />
    </>
  );
}
