//library
import cn from "classnames";

//components
import Link from "next/link";
import { Icon } from "@/shared";

//styles
import s from "./SocialMediaList.module.scss";

export const SocialMediaList = ({ name }) => {
    return (
        <ul className={s.socialMediaList}>
            <li className={s.socialMediaItem}>
                <Link
                    className={cn(s.socialMediaLink, {
                        [s.socialMediaLinkIcon]: name === "icon",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/svitlana_designer__?igsh=MWpnZjF1M2V6dXE2bA==">
                    {name === "icon" ? <Icon className={s.socialMediaIcon} width="24" height="24" name="instagram" /> : "Instagram"}
                </Link>
            </li>
            <li className={s.socialMediaItem}>
                <Link
                    className={cn(s.socialMediaLink, {
                        [s.socialMediaLinkIcon]: name === "icon",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/Svitlana_Lyzanets">
                    {name === "icon" ? <Icon className={s.socialMediaIcon} width="24" height="24" name="telegram" /> : "Telegram"}
                </Link>
            </li>
            <li className={s.socialMediaItem}>
                <Link
                    className={cn(s.socialMediaLink, {
                        [s.socialMediaLinkIcon]: name === "icon",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/421951336134">
                    {name === "icon" ? <Icon className={s.socialMediaIcon} width="24" height="24" name="whatsapp" /> : "WhatsApp"}
                </Link>
            </li>
            <li className={s.socialMediaItem}>
                <Link
                    className={cn(s.socialMediaLink, {
                        [s.socialMediaLinkIcon]: name === "icon",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.behance.net/97ba39f6?fbclid=PAAaZK5HhII4Kuwq3wTXzboA3O6WUwFsra-1fLXm8VzdiKkiHRlurV6g9poAg">
                    {name === "icon" ? <Icon className={s.socialMediaIcon} width="24" height="24" name="behance" /> : "Behance"}
                </Link>
            </li>
        </ul>
    );
};
