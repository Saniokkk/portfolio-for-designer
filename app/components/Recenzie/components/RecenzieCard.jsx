import Image from "next/image";
import { Icon, Text, Title } from "@/shared";
import { openSans } from "../../../fonts";
import s from "./RecenzieCard.module.scss";
import cn  from 'classnames';

export const RecenzieCard = ({
  data: { iconUrl, whoIsCustomer, name, text },
  index,
}) => {
  const quantityIcons = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  quantityIcons.length = index ? index + 1 : 1;
  console.log(quantityIcons);
  return (
    <div className={s.item}>
      <Icon
      className={s.icon}
        name={"quotes"}
        width={60}
        height={60}
      ></Icon>
      <Text className={s.comment}>{text}</Text>
      <div className={s.descriptionCustomer}>
        <Image
          className={s.photo}
          width="55"
          height="55"
          src={iconUrl}
          alt="Logo"
        />
        <div className={cn(openSans.className, s.wrapCustomerText)}>
          <Title
            tag={"h3"}
            className={cn(openSans.className,s.name)}
          >
            {name}
          </Title>
          <Text className={s.text}>{whoIsCustomer}</Text>
        </div>
      </div>
    </div>
  );
};
