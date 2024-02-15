import urlImage from "@/public/projects/hero-desk.jpg";
import smmImg from "@/public/projects/smme.jpg";
import techlightImg from "@/public/projects/techlight.jpg";
import kvitkarniaImg from "@/public/projects/kvitkarnia.jpg";
import a2b_haulImg from "@/public/projects/a2b_haul.jpg";

//about
import firstImgAbout from '@/public/aboutAditionalPage/first-about-desc.png';
import secondImgAbout from '@/public/aboutAditionalPage/second-about-desc.png';

// import heroImgMob from "@/public/projects/hero-mob.jpg";
// import heroImgTab from "@/public/projects/hero-tablet.jpg";


export const projectData = {
  hero: {
    mainTitle: "SMME",
    year: 2023,
    projectType: "UI/UX Design, Multipage site",
    urlImage,
    descriptionAboutCompony:
      "Founded in 2020, Social Media Marketing Experts was born out of the vision of a team of dedicated digital enthusiasts who recognized the transformative power of strategic marketing in the digital age. From humble beginnings, they have grown into a dynamic agency that provides cutting-edge solutions for businesses of all sizes. The mission of Social Media Marketing Experts is simple but profound - to help companies not just navigate but dominate the digital world. ",
  },
  about: {
    description: `My task was to create a modern website that reflects the company's values and provides convenient access to information.To familiarize users with the company's services, demonstrate their work and present the product range. The new site was to serve as an effective tool for interaction, offering a comprehensive view of the company's capabilities and emphasizing its professionalism.`,
    images: [firstImgAbout, secondImgAbout]
  },
  projects: [
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
      srcImg: a2b_haulImg,
      name: "A2b haul",
      description: "UI/UX Design, Multipage site",
    },
    {
      id: 4,
      srcImg: kvitkarniaImg,
      name: "Kvitkarnia",
      description: "UI/UX Design, Multipage site",
    },
  ],
};