import cn from "classnames";
//styles
import s from "./FormOrder.module.scss";

export const OverseasFields = (second) => {
  return (
    <>
      <div className={s.inputWrap}>
        <input
          className={cn(s.input, s.address)}
          type="text"
          name="full_shipping_address"
          placeholder=" "
          id="full_shipping_address"
          required
        />
        <label className={cn(s.label)} htmlFor="full_shipping_address">
          Full shipping address
        </label>
      </div>
      <div className={s.inputWrap}>
        <input
          className={cn(s.input, s.address)}
          type="text"
          name="State_Province_zip_code"
          placeholder=" "
          id="State_Province_zip_code"
          required
        />
        <label className={cn(s.label)} htmlFor="State_Province_zip_code">
          State/Province and zip/post code
        </label>
      </div>
    </>
  );
};
