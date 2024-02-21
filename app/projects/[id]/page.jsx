import { projectData, projects } from "@/data/projectsPage";
import { Hero, About, OtherProjects, Result } from "./components";

export default function ProjectPage({ params }) {
  const dataForPage = projectData.find(
    (project) => project.id === Number(params.id)
  );

  const { hero, about, result } = dataForPage;

  const otherProjects = projects.filter(
    (project) => project.id !== Number(params.id)
  );

  return (
    <>
      <Hero heroData={hero}></Hero>
      <About
        data={about}
        mainTitle={hero.mainTitle}
      />
      <Result data={result} />
      <OtherProjects data={otherProjects} />
    </>
  );
}
