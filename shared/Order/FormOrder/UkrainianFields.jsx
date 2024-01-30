import cn from "classnames";

//styles
import s from "./FormOrder.module.scss";

export const UkrainianFields = (second) => {
  return (
    <>
      <div className={s.inputWrap}>
        <input
          className={cn(s.input, s.location)}
          type="text"
          name="city"
          placeholder=" "
          id="city"
          required
        />
        <label className={cn(s.label)} htmlFor="city">
          City
        </label>
      </div>
      <div className={s.inputWrap}>
        <input
          className={cn(s.input, s.address)}
          type="text"
          name="address"
          placeholder=" "
          id="address"
          required
        />
        <label className={cn(s.label)} htmlFor="address">
          Address
        </label>
      </div>
    </>
  );
};
