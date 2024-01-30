//component
import cn from "classnames";
import { Card } from "./Card/Card";

//styles
import s from "./Cards.module.scss";

export const Cards = ({ data, className }) => {
  return (
    <>
      <ul className={cn(s.list, className)}>
        {data && data.map((el) => <Card data={el} key={el.id} />)}
      </ul>
    </>
  );
};
