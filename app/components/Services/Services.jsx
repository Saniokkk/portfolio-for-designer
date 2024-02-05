import cn from "classnames";

import { Container, Text, Title } from "@/shared";
import { instrumentSans } from "../../fonts";
import ServiceSwiper from "./components/ServiceSwiper";
import s from "./Services.module.scss";
import Link from "next/link";

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
  console.log("arr", arr);
  return (
    <section>
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
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
        <Text className={cn(instrumentSans.className, s.text)}>
          Let’s talk websites
        </Text>
      </Link>
    </section>
  );
};
