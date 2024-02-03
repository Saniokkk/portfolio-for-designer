//components
import Link from "next/link";

//library
import cn from "classnames";

//styles and fonts
import s from "./Logo.module.scss";
import { instrumentSerif } from "@/app/fonts";

export const Logo = () => {
    return (
        <Link href="/" aria-label="Logo" className={cn(s.logo, instrumentSerif.className)}>
            sd.
        </Link>
    );
};
