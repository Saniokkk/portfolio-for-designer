import Link from "next/link";
import { Icon } from "@/shared";

import s from "./SocialMediaList.module.scss";

export const SocialMediaList = () => {
  return (
    <ul className={s.socialMediaList}>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/your.rules_corsets?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="instagram" />
        </Link>
      </li>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href=" https://t.me/Ki2yWhy"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="telegram" />
        </Link>
      </li>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/@your.rules?_t=8iN8ADduluf&_r=1"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="tiktok" />
        </Link>
      </li>
    </ul>
  );
};
