import { Container, Title } from "@/shared";
// import { ServiceCard } from './components/ServiceCard';
import ServiceSwiper from "./components/ServiceSwiper";
import s from "./Services.module.scss";

const data = [
  {
    title: "Landing page",
    text: "Lorem ipsum dolor sit amet consectetur. Tellus a senectus vitae pretium egestas donec maecenas lacus. Sapien arcu varius lectus feugiat ac dictum. Malesuada enim.",
  },
  {
    title: "Multipage site",
    text: "Lorem ipsum dolor sit amet consectetur. Tellus a senectus vitae pretium egestas donec maecenas lacus. Sapien arcu varius lectus feugiat ac dictum. Malesuada enim.",
  },
  {
    title: "E-Commerce",
    text: "Lorem ipsum dolor sit amet consectetur. Tellus a senectus vitae pretium egestas donec maecenas lacus. Sapien arcu varius lectus feugiat ac dictum. Malesuada enim.",
  },
  {
    title: "Redesign Website",
    text: "Lorem ipsum dolor sit amet consectetur. Tellus a senectus vitae pretium egestas donec maecenas lacus. Sapien arcu varius lectus feugiat ac dictum. Malesuada enim.",
  },
];

export const Services = () => {
  return (
    <section>
      <Container>
        <Title
          tag="h2"
          className={s.title}
        >
          My services
        </Title>
        {/* <div className={s.swiperWrap}> */}
        <ServiceSwiper data={data} />
        {/* </div> */}
      </Container>
    </section>
  );
};
