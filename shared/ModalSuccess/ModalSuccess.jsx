import Image from "next/image";
import cn from "classnames";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import logo from "@/public/logo.png";

import s from "./ModalSuccess.module.scss";
import { Modal } from "@/shared";
import { closeModal } from "@/helpers/modal";

export const ModalSuccess = ({ setIsOpen, isOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={cn(s.modal)} onClick={(e) => e.stopPropagation()}>
        <button
          className={cn(s.closeBtn)}
          onClick={() => {
            closeModal(setIsOpen);
          }}
        >
          <Icon className={cn(s.icon)} name="close" width="48" height="48" />
        </button>
        <Title className={cn(s.title)} tag="h2">
          Thank you!
        </Title>
        <Text size="xs" className={cn(s.text)}>
          We have received your order and will be in touch shortly.
        </Text>
        <Image
          className={cn(s.logo)}
          width="233"
          height="58"
          src={logo}
          alt="Logo"
        />

        <button
          className={s.btn}
          type="button"
          onClick={() => {
            closeModal(setIsOpen);
          }}
        >
          Ok
        </button>
      </div>
    </Modal>
  );
};
