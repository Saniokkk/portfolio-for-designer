import { Hero } from "./components";
// import heroImgMob from "@/public/projects/hero-mob.jpg";
// import heroImgTab from "@/public/projects/hero-tablet.jpg";
import urlImage from "@/public/projects/hero-desk.jpg";

const heroData = {
  mainTitle: "SMME",
  year: 2023,
  projectType: "UI/UX Design, Multipage site",
  urlImage,
  descriptionAboutCompony:
    "Founded in 2020, Social Media Marketing Experts was born out of the vision of a team of dedicated digital enthusiasts who recognized the transformative power of strategic marketing in the digital age. From humble beginnings, they have grown into a dynamic agency that provides cutting-edge solutions for businesses of all sizes. The mission of Social Media Marketing Experts is simple but profound - to help companies not just navigate but dominate the digital world. ",
};

export default function ProjectPage({ params }) {
  return (
    <>
      My Post: {params.id}
      <Hero heroData={heroData}></Hero>
    </>
  );
}
