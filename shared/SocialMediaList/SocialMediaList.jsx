//library
import cn from "classnames";

//components
import Link from "next/link";
import { Icon } from "@/shared";

//styles
import s from "./SocialMediaList.module.scss";
import { instrumentSans } from "../../app/fonts";

const data = [
    {
        link: "https://www.instagram.com/svitlana_designer__?igsh=MWpnZjF1M2V6dXE2bA==",
        icon: "instagram",
        text: "Instagram",
    },
    {
        link: "https://t.me/Svitlana_Lyzanets",
        icon: "telegram",
        text: "Telegram",
    },
    {
        link: "https://wa.me/421951336134",
        icon: "whatsapp",
        text: "WhatsApp",
    },
    {
        link: "https://www.behance.net/97ba39f6?fbclid=PAAaZK5HhII4Kuwq3wTXzboA3O6WUwFsra-1fLXm8VzdiKkiHRlurV6g9poAg",
        icon: "behance",
        text: "Behance",
    },
];

export const SocialMediaList = ({ name }) => {
    return (
        <ul className={s.socialMediaList}>
            {data.map((el, i) => (
                <li className={s.socialMediaItem} key={i}>
                    <Link
                        className={cn(s.socialMediaLink, instrumentSans.className, {
                            [s.socialMediaLinkIcon]: name === "icon",
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={el.link}>
                        {name === "icon" ? <Icon className={s.socialMediaIcon} width="24" height="24" name={el.icon} /> : el.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
