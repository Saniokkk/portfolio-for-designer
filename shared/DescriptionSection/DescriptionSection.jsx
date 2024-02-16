import s from "./DescriptionSection.module.scss";

export const DescriptionSection = ({ title, description, ...props }) => {
  return (
    <div
      className={s.wrapAbout}
      {...props}
    >
      <h2 className={s.titleAbout}>{title}</h2>
      <p className={s.textAbout}>{description}</p>
    </div>
  );
};
