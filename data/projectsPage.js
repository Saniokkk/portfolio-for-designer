import smmImg from "@/public/projects/smme.webp";
import techlightImg from "@/public/projects/techlight.webp";
import kvitkarniaImg from "@/public/projects/kvitkarnia.webp";
import a2b_haulImg from "@/public/projects/a2b_haul.webp";

// /*--- SMME --- */
// import {
//   smmeHeroMainImage,
//   smmeFirstImgTask,
//   smmeSecondImgTask,
//   smmePreviewLargeImgTask,
//   smmePreviewSmallImgTask,
//   smmeFirstImgResult,
//   smmeSecondImgResult,
//   smmePreviewImgResult,
// } from "./static-image-paths/smme.js";
// console.log(smmeHeroMainImage);

//hero
import smmeHeroMainImage from "@/public/projects/smme/hero/hero-desktop.webp";
// import heroImgMob from "@/public/projects/smme/hero/hero-mob.webp";
// import heroImgTab from "@/public/projects/smme/hero/hero-tablet.webp";

//task
import smmeFirstImgTask from "@/public/projects/smme/task/first-desk.webp";
import smmeSecondImgTask from "@/public/projects/smme/task/second-desk.webp";
import smmePreviewLargeImgTask from "@/public/projects/smme/task/preview-large.webp";
import smmePreviewSmallImgTask from "@/public/projects/smme/task/preview-small.webp";

//result
import smmeFirstImgResult from "@/public/projects/smme/result/desk-1.webp";
import smmeSecondImgResult from "@/public/projects/smme/result/desk-2.webp";
import smmePreviewImgResult from "@/public/projects/smme/result/preview-project.webp";

// /*--- TEKLIGHT --- */
// import {
//   teklightHeroMainImage,
//   teklightFirstImgTask,
//   teklightSecondImgTask,
//   teklightPreviewLargeImgTask,
//   teklightPreviewSmallImgTask,
//   teklightFirstImgResult,
//   teklightSecondImgResult,
//   teklightPreviewImgResult,
// } from "./static-image-paths/teklight.js";

//hero
import teklightHeroMainImage from "@/public/projects/teklight/hero/hero-desktop.webp";
// import heroImgMob from "@/public/projects/teklight/hero/hero-mob.webp";
// import heroImgTab from "@/public/projects/teklight/hero/hero-tablet.webp";

//task
import teklightFirstImgTask from "@/public/projects/teklight/task/first-desk.webp";
import teklightSecondImgTask from "@/public/projects/teklight/task/second-desk.webp";
import teklightPreviewLargeImgTask from "@/public/projects/teklight/task/preview-large.webp";
import teklightPreviewSmallImgTask from "@/public/projects/teklight/task/preview-small.webp";

//result
import teklightFirstImgResult from "@/public/projects/teklight/result/desk-1.webp";
import teklightSecondImgResult from "@/public/projects/teklight/result/desk-2.webp";
import teklightPreviewImgResult from "@/public/projects/teklight/result/preview-project.webp";

// /*--- KVITKARNIA --- */
// import {
//   kvitkarniaHeroMainImage,
//   kvitkarniaFirstImgTask,
//   kvitkarniaSecondImgTask,
//   kvitkarniaPreviewLargeImgTask,
//   kvitkarniaPreviewSmallImgTask,
//   kvitkarniaFirstImgResult,
//   kvitkarniaSecondImgResult,
//   kvitkarniaPreviewImgResult,
// } from "./static-image-paths/kvitkarnia.js";

//hero
import kvitkarniaHeroMainImage from "@/public/projects/kvitkarnia/hero/hero-desktop.webp";
console.log("kvitkarniaHeroMainImage: ", kvitkarniaHeroMainImage);
// import heroImgMob from "@/public/projects/kvitkarnia/hero/hero-mob.webp";
// import heroImgTab from "@/public/projects/kvitkarnia/hero/hero-tablet.webp";

//task
import kvitkarniaFirstImgTask from "@/public/projects/kvitkarnia/task/first-desk.webp";
import kvitkarniaSecondImgTask from "@/public/projects/kvitkarnia/task/second-desk.webp";
import kvitkarniaPreviewLargeImgTask from "@/public/projects/kvitkarnia/task/preview-large.webp";
import kvitkarniaPreviewSmallImgTask from "@/public/projects/kvitkarnia/task/preview-small.webp";

//result
import kvitkarniaFirstImgResult from "@/public/projects/kvitkarnia/result/desk-1.webp";
import kvitkarniaSecondImgResult from "@/public/projects/kvitkarnia/result/desk-2.webp";
import kvitkarniaPreviewImgResult from "@/public/projects/kvitkarnia/result/preview-project.webp";

export const projectData = [
  {
    id: 1,
    hero: {
      mainTitle: "SMME",
      year: 2023,
      projectType: "UI/UX Design, Multipage site",
      urlImage: smmeHeroMainImage,
      descriptionAboutCompony:
        "Founded in 2020, Social Media Marketing Experts was born out of the vision of a team of dedicated digital enthusiasts who recognized the transformative power of strategic marketing in the digital age. From humble beginnings, they have grown into a dynamic agency that provides cutting-edge solutions for businesses of all sizes. The mission of Social Media Marketing Experts is simple but profound - to help companies not just navigate but dominate the digital world. ",
    },
    about: {
      description: `My task was to create a modern website that reflects the company's values and provides convenient access to information.To familiarize users with the company's services, demonstrate their work and present the product range. The new site was to serve as an effective tool for interaction, offering a comprehensive view of the company's capabilities and emphasizing its professionalism.`,
      images: [
        smmeFirstImgTask,
        smmeSecondImgTask,
        smmePreviewLargeImgTask,
        smmePreviewSmallImgTask,
      ],
    },
    result: {
      firstImgResult: smmeFirstImgResult,
      secondImgResult: smmeSecondImgResult,
      previewImgResult: smmePreviewImgResult,
      description:
        "This is a modern and innovative website for marketing experts. During the development process, we conducted a thorough analysis of competitors and implemented the right process to create an attractive and effective online resource. We focused on typography to give the site a modern and professional look. Each element was carefully selected to reflect the style and uniqueness of the brand. We provided a detailed description of all the services offered by the experts. Each service has its own section with a clear description, benefits, and features. The site has a portfolio section that presents real projects completed by the company, which clearly demonstrate their experience and achievements. The products offered by the company are presented with a special emphasis on the visual aspect. Each product is accompanied by high-quality photos and detailed descriptions.",
    },
  },
  {
    id: 2,
    hero: {
      mainTitle: "Teklight",
      year: 2023,
      projectType: "UI/UX Design, E-commerce",
      urlImage: teklightHeroMainImage,
      descriptionAboutCompony:
        "TekLight is an online store specializing in lighting and electrical equipment. Over the course of 7 years in the market, they have become experts in selecting materials and equipment, providing the highest quality products to their over 500 regular customers. They take pride in their inventory, which consists of over 50,000 items in stock. Additionally, they have successfully built more than 100 energy-independent facilities and implemented over 1,000 projects in the field of energy. Their mission is to provide the best service and products on the market. They are always ready to assist customers in choosing the perfect solution for any lighting and electrical projects.",
    },
    about: {
      description: `My task was to create a modern website for the company that would distinguish them from competitors. This included adhering to the company's brand guidelines, designing an aesthetically pleasing and intuitively understandable layout that reflects their values and expertise. Additionally, the goal was to provide users with a convenient interface and fast access to the company's products and services.`,
      images: [
        teklightFirstImgTask,
        teklightSecondImgTask,
        teklightPreviewLargeImgTask,
        teklightPreviewSmallImgTask,
      ],
    },
    result: {
      firstImgResult: teklightFirstImgResult,
      secondImgResult: teklightSecondImgResult,
      previewImgResult: teklightPreviewImgResult,
      description:
        "As a result of the work process, a detailed analysis of competitors was conducted to understand their strengths and weaknesses. A website map proposal was developed to ensure logical navigation and structure on the website. A convenient and visually appealing website with an intuitive interface was created to enhance the user experience. Additionally, the website was optimized for various devices to ensure accessibility on different platforms. Necessary features and capabilities were implemented to effectively address the needs of the target audience. Continuous analysis and improvement were carried out to ensure that the website meets desired goals and provides a competitive advantage in the market.",
    },
  },
  {
    id: 3,
    hero: {
      mainTitle: "Kvitkarnia",
      year: 2023,
      projectType: "UI/UX Design, Multipage site",
      urlImage: kvitkarniaHeroMainImage,
      descriptionAboutCompony:
        "The flower shop Kvitkarnia opened its doors in 2023, offering unique floral compositions and services. Their story began with a deep love for flowers and a desire to share this beauty with others. They are committed to ensuring that every customer finds not only a floral bouquet but also a piece of happiness and joy with them. Their mission is to create not only beautiful compositions but also a sense of uniqueness and individuality for each customer. They strive to make every event unforgettable and expressive, turning each moment into a unique masterpiece of floral art. ",
    },
    about: {
      description:
        "The task involved developing a minimalist website design with a focus on showcasing floral compositions as the main element on the pages. The design had to adhere to the corporate brand guidelines, reflecting the unique atmosphere and style of the 'Kvitkarnia' flower shop. Interface solutions were chosen to ensure convenient navigation and user-friendly experience.",
      images: [
        kvitkarniaFirstImgTask,
        kvitkarniaSecondImgTask,
        kvitkarniaPreviewLargeImgTask,
        kvitkarniaPreviewSmallImgTask,
      ],
    },
    result: {
      firstImgResult: kvitkarniaFirstImgResult,
      secondImgResult: kvitkarniaSecondImgResult,
      previewImgResult: kvitkarniaPreviewImgResult,
      description:
        "As a result of the work, a detailed analysis of competitors was conducted, allowing us to gain insights into current market trends and identify areas for differentiation. Based on this analysis, three distinct stylistic approaches were proposed to clients, each of which emphasized the values of the company. These proposals aimed to replicate the essence of 'Kvitkarnia', while offering diversity and appeal to a varied audience. The outcome was an attractive website, with a focus on the store's compositions, enhancing the visual experience for visitors.",
    },
  },
];

export const projects = [
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
    name: "Kvitkarnia",
    description: "UI/UX Design, Multipage site",
  },
  // {
  //   id: 4,
  //   srcImg: a2b_haulImg,
  //   name: "A2b haul",
  //   description: "UI/UX Design, Multipage site",
  // },
];
