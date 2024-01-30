"use client";

import cn from "classnames";

import s from "./Modal.module.scss";
import { closeModal } from "@/helpers/modal";
import { isTouchScreen } from "@/helpers/isTouchScreen";

export const Modal = ({ isOpen, setIsOpen, children }) => {
  function openModal() {
    if (isTouchScreen()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "11px";
      document.querySelector("header").style.paddingRight = "11px";
    }
  }


  if (isOpen) {
    openModal();
  }

  return (
    <div
      className={cn(s.backdrop, { [s.active]: isOpen })}
      onClick={() => {
        closeModal(setIsOpen);
      }}
    >
      {children}
    </div>
  );
};
