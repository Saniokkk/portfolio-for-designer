import s from "./Container.module.scss";
import cn from "classnames";

export const Container = ({ className, children }) => {
    return <div className={cn(s.container, className)}>{children}</div>;
};
