import { Hero, About, OtherProjects, Result } from "./components";
import { projectData, projects } from "@/data/projectsPage";

export async function generateStaticParams() {

  return projectData.map((project) => ({
    id: String(project.id),
  }))
}
export default function ProjectPage({ params }) {
  console.log(projectData);
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
