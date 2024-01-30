import { Text } from "../Text/Text";
import s from "./ConditionsList.module.scss";

export const ConditionItem = ({ text, num }) => {
  return (
    <li className={s.item}>
      <span>{num + "."}</span>
      <Text className={s.text}>{text}</Text>
    </li>
  );
};
