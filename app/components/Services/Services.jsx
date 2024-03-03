import cn from "classnames";

import { Container, Text, Title } from "@/shared";
import { instrumentSans } from "../../fonts";
import ServiceSwiper from "./components/ServiceSwiper";
import s from "./Services.module.scss";
import Link from "next/link";
import { fakeArray } from "@/data/fakeArray";

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

const arr = [];
arr.length = 20;

export const Services = () => {
  return (
    <section
      className={s.section}
      id="services"
    >
      <Container>
        <Title
          tag="h2"
          className={s.title}
        >
          My services
        </Title>
      </Container>
      <ServiceSwiper data={data} />
      <Link
        href={"https://wa.me/421951336134"}
        className={cn(instrumentSans.className, s.lineWrap)}
      >
        {fakeArray &&
          fakeArray.map((el, i) => (
            <Text
              key={i}
              className={cn(instrumentSans.className, s.text)}
            >
              Lets talk websites
            </Text>
          ))}
      </Link>
      {/* </Container> */}
    </section>
  );
};
