import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { Title, Text } from "@/shared";
import { instrumentSans } from "@/app/fonts";
import s from "./Card.module.scss";

export const Card = ({ data: { id, srcImg, name, description, box } }) => {
    return (
        <li className={s.item} id={box}>
            <Link href={`/projects/${id}`} className={s.link}>
                <Image className={s.img} src={srcImg} alt="" width={335} height={320} />
                <h3 className={cn(instrumentSans.className, s.title)} tag={"h3"}>
                    {name}
                </h3>
                <Text className={s.text}>{description}</Text>
            </Link>
        </li>
    );
};
