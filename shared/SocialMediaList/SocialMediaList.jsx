import Link from "next/link";
import { Icon } from "@/shared";

import s from "./SocialMediaList.module.scss";

export const SocialMediaList = () => {
  return (
      <ul className={s.socialMediaList}>
          <li className={s.socialMediaItem}>
              <Link className={s.socialMediaLink} target="_blank" rel="noopener noreferrer" href="/">
                  <Icon className={s.socialMediaIcon} width="24" height="24" name="instagram" />
              </Link>
          </li>
          <li className={s.socialMediaItem}>
              <Link className={s.socialMediaLink} target="_blank" rel="noopener noreferrer" href="/">
                  <Icon className={s.socialMediaIcon} width="24" height="24" name="telegram" />
              </Link>
          </li>
          <li className={s.socialMediaItem}>
              <Link className={s.socialMediaLink} target="_blank" rel="noopener noreferrer" href="/">
                  <Icon className={s.socialMediaIcon} width="24" height="24" name="behance" />
              </Link>
          </li>
          <li className={s.socialMediaItem}>
              <Link className={s.socialMediaLink} target="_blank" rel="noopener noreferrer" href="/">
                  <Icon className={s.socialMediaIcon} width="24" height="24" name="whatsapp" />
              </Link>
          </li>
      </ul>
  );
};
