
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { Title, Text } from "@/shared";
import { instrumentSans } from "@/app/fonts";
import s from "./CardProject.module.scss";

export const CardProject = ({ data: { id, srcImg, name, description } }) => {
  return (
    <div className={s.item}>
      <Link href={`/projects/${id}`} className={s.link}>
        <Image
          className={s.img}
          src={srcImg}
          alt=""
          width={552}
          height={600}
        />
        <h3
          className={cn(instrumentSans.className, s.title)}
          tag={"h3"}
        >
          {name}
        </h3>
        <Text className={s.text}>{description}</Text>
      </Link>
    </div>
  );
};
