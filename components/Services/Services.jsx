import cn from "classnames";

import { Container, Text, Title } from "@/shared";
import { instrumentSans } from "../../app/fonts";
import ServiceSwiper from "./components/ServiceSwiper";
import s from "./Services.module.scss";
import Link from "next/link";
import { fakeArray } from "@/data/fakeArray";
import { servicesData } from "@/data/services";

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
      <ServiceSwiper data={servicesData} />
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
    </section>
  );
};
