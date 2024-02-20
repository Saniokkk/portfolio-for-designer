import urlImage from "@/public/projects/hero-desktop.webp";
import smmImg from "@/public/projects/smme.webp";
import techlightImg from "@/public/projects/techlight.webp";
import kvitkarniaImg from "@/public/projects/kvitkarnia.webp";
import a2b_haulImg from "@/public/projects/a2b_haul.webp";

//about
import firstImgAbout from "@/public/aboutAditionalPage/first-about-desc.webp";
import secondImgAbout from "@/public/aboutAditionalPage/second-about-desc.webp";
import thirdImgAbout from "@/public/aboutAditionalPage/preview-large.webp";
import forthImgAbout from "@/public/aboutAditionalPage/preview-small.webp";

// import heroImgMob from "@/public/projects/hero-mob.webp";
// import heroImgTab from "@/public/projects/hero-tablet.webp";

//result
import firstImgResult from "@/public/projects/result/tab-1.webp";
import secondImgResult from "@/public/projects/result/tab-2.webp";
import previewImgResult from "@/public/projects/result/preview-project.webp";

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
    images: [firstImgAbout, secondImgAbout, thirdImgAbout, forthImgAbout],
  },
  result: {
    firstImgResult,
    secondImgResult,
    previewImgResult,
    description:
      "This is a modern and innovative website for marketing experts. During the development process, we conducted a thorough analysis of competitors and implemented the right process to create an attractive and effective online resource. We focused on typography to give the site a modern and professional look. Each element was carefully selected to reflect the style and uniqueness of the brand. We provided a detailed description of all the services offered by the experts. Each service has its own section with a clear description, benefits, and features. The site has a portfolio section that presents real projects completed by the company, which clearly demonstrate their experience and achievements. The products offered by the company are presented with a special emphasis on the visual aspect. Each product is accompanied by high-quality photos and detailed descriptions.",
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
