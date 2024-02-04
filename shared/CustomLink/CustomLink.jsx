//components
import Link from "next/link";

//styles
import s from "./CustomLink.module.scss";
import cn from "classnames";

export const CustomLink = ({ className, path, children, additional, ...props }) => {
    return (
        <Link className={cn(className ? className : s.button)} {...props} href={path}>
            {children}
            {additional && (
                <svg width="24" height="24" className={s.icon}>
                    <use href={`/symbol-defs.svg#arrow-right`} />
                </svg>
            )}
        </Link>
    );
};
