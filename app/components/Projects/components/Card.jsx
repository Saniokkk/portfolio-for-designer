import Image from "next/image";
import { Link } from "next/link";
import { Title, Text } from "@/shared";
import s from "./Card.module.scss";

export const Card = ({ data: { srcImg, name, description } }) => {
  return (
    <li className={s.item}>
      <Link className={s.link}>
        <Image
          className={s.img}
          src={srcImg}
          alt=""
          width={335}
          height={320}
        />
        <Title
          className={s.title}
          tag={"h3"}
        >
          {name}
        </Title>
        <Text className={s.text}>{description}</Text>
      </Link>
    </li>
  );
};
