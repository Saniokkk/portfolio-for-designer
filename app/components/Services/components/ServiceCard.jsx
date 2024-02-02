import Image from "next/image";
import { Text, Title } from "@/shared";
import logo from "@/public/circle-gradient.png";
import s from "./ServiceCard.module.scss";

export const ServiceCard = ({
  data: { iconUrl = logo, title, text },
  index,
}) => {
  const quantityIcons = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  quantityIcons.length = index ? index + 1 : 1;
  console.log(quantityIcons);
  return (
    <div className={s.item}>
      <div className={s.iconsWrap}>
        {quantityIcons.map((_, i) => {
          console.log(i);
          return (
            <Image
              key={i}
              className={s.icon}
              width="233"
              height="58"
              src={iconUrl}
              alt="Logo"
            />
          );
        })}
      </div>
      <Title
        tag={"h3"}
        className={s.title}
      >
        {title}
      </Title>
      <Text className={s.text}>{text}</Text>
    </div>
  );
};
