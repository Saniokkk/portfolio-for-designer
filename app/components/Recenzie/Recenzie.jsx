import { Container, Text, Title } from "@/shared";
import logoKutelmakh from "@/public/Oksana-Kutelmakh.png";
import logoKondratyuk from "@/public/Natalia-Kondratyuk.png";
import logoBodnar from "@/public/Yulia-Bodnar.png";
import RecenzieSwiper from "./components/RecenzieSwiper";
import s from "./Recenzie.module.scss";

const data = [
  {
    iconUrl: logoKutelmakh,
    whoIsCustomer: "Owner of a flower shop",
    name: "Oksana Kutelmakh",
    text: "Svitlana created a website for my flower shop. It is incredibly beautiful!!!! Everything is just perfect! Attention to details!!! My husband is very picky, but even he said that everything is just top!!!! Really. In the beginning, I did not have a clear vision. But in the process she managed to catch the right course, where to go! Everything is just wow, everything is beautiful, it was a pleasure to work with her!",
  },
  {
    iconUrl: logoKondratyuk,
    whoIsCustomer: "Nutritionist",
    name: "Natalia Kondratyuk",
    text: "My name is Natalia, I am a nutritionist. Svitlana updated the design of my information materials for work for me. The work was done well. It was done quickly. Looks professional and stylish.  Svitlana takes into account all requests. Several times she redid what I was not satisfied with. She is punctual - she kept all the agreed deadlines clearly. I liked the cooperation.  2 orders have already been completed and I have a few more in mind. I sincerely recommend for cooperation.",
  },
  {
    iconUrl: logoBodnar,
    whoIsCustomer: "Author of transformational practices",
    name: "Yulia Bodnar",
    text: "LDear Svitlana, I am very grateful to the Universe that it was you who took up the implementation of my project and realized it in the coolest colors 🌈 This work of art that you revived, breathed life into it, will now serve all the Women of this world 🌎 and people in general I wish to cooperate with you in the future🥰 I like your approach, you feel me and help me 🙏 Thank you very much ♥️ ",
  },
];

export const Recenzie = () => {
  return (
    <section className={s.section}>
      <Container>
        <Title
          tag="h2"
          className={s.title}
        >
          Recenzie
        </Title>
      </Container>
      <RecenzieSwiper data={data} />
    </section>
  );
};
