import { ConditionItem } from "./ConditionItem";

import s from './ConditionsList.module.scss'

const arrText = [
  "Pay in full for the order or make an advance payment of 20% of the total price of the product.",
  "After everything above is completed, the order will be placed and will be processed.",
  "As soon as the corset is ready, we will send photos, carefully pack, provide you with a tracking number.",
];

export const ConditionsList = () => {
  return (
    <ol className={s.list}>
      {arrText.map((text, i) => (
        <ConditionItem key={i} num={i + 1} text={text} />
      ))}
    </ol>
  );
};
