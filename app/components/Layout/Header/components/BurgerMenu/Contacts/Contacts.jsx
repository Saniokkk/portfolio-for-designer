//library
import cn from "classnames";

//components
import { SocialMediaList } from "@/shared";
import Link from "next/link";

//styles
import s from "./Contacts.module.scss";
import { instrumentSerif } from "@/app/fonts";

export const Contacts = () => {
    return (
        <div className={s.containerContacts}>
            <Link href="mailto:svitlana.lizanets@gmail.com" className={cn(s.email, instrumentSerif.className)}>
                svitlana.lizanets@gmail.com
            </Link>
            <SocialMediaList />
        </div>
    );
};
