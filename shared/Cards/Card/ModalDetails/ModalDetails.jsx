"use client";

import cn from "classnames";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

//styles
import s from "./ModalDetails.module.scss";
import { Modal } from "@/shared";
import { Icon, Text, Title } from "@/shared";
import { Slider } from "./Slider/Slider";
import { closeModal } from "@/helpers/modal";
// import imageUrl from "@/public/example.png";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// const images = [{ url: imageUrl, alt: "placeholder" }];

export const ModalDetails = ({ data, isOpen, setIsOpen }) => {
  const [modalIsOverflow, setModalIsOverflow] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [mobileViewForText, setMobileViewForText] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const modal = useRef(null);
  const { name: title, description, price } = data?.attributes;
  const maxLength = 150;

  const getDescriptionContent = () => {
    if (isExpanded) {
      return description;
    }
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}`
      : description;
  };

  function changeViewport() {
    const widthViewport = window.innerWidth;
    const widthViewportForText = window.innerWidth;

    widthViewport < 768 ? setMobileView(true) : setMobileView(false);
    widthViewportForText < 1280
      ? setMobileViewForText(true)
      : setMobileViewForText(false);

    checkOverflowModal();
  }

  function checkOverflowModal() {
    requestAnimationFrame(() => {
      if (modal.current) {
        const heightViewport = document.documentElement.clientHeight;
        console.log("heightViewport: ", heightViewport);
        const heightModal = Number.parseInt(
          getComputedStyle(modal.current).height,
        );
        console.log("heightModal: ", heightModal);

        heightViewport < heightModal
          ? setModalIsOverflow(true)
          : setModalIsOverflow(false);
      }
    });
  }

  useEffect(() => {
    checkOverflowModal();
    window.addEventListener("resize", changeViewport);
    return () => {
      window.removeEventListener("resize", changeViewport);
    };
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
    changeViewport();
  }, []);

  useEffect(() => {
    checkOverflowModal();
  }, [isExpanded]);

  const arrImg = data.attributes.card_gallery_images.data;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(s.modalDetails, {
          [s.overflow]: modalIsOverflow,
        })}
        ref={modal}
      >
        <button
          className={cn(s.closeBtn)}
          onClick={() => {
            closeModal(setIsOpen);
          }}
        >
          <Icon className={cn(s.icon)} name="close" width="48" height="48" />
        </button>
        <Title className={cn(s.title)} tag="h2">
          {title}
        </Title>
        <Text
          size="xs"
          className={cn(s.descrText, { [s.expanded]: isExpanded })}
        >
          {mobileViewForText ? (
            <>
              {getDescriptionContent()}
              {!isExpanded && description.length > maxLength ? (
                <button
                  className={s.loadMore}
                  onClick={() => {
                    setIsExpanded(true);
                    // changeViewport();
                  }}
                >
                  &#9660;
                </button>
              ) : (
                <button
                  className={s.loadMore}
                  onClick={() => {
                    setIsExpanded(false);
                    // changeViewport();
                  }}
                >
                  &#9650;
                </button>
              )}
            </>
          ) : (
            description
          )}
        </Text>
        <Text size="xs" className={cn(s.priceText)}>
          Price: {price}$
        </Text>
        {mobileView ? (
          <Slider data={arrImg} classImage={s.image} />
        ) : (
          <ul className={cn(s.listImage)}>
            {arrImg.map((img, i) => {
              const { name, url, width, height } = img.attributes;
              return (
                <li className={cn(s.itemImage)} key={i}>
                  <Zoom>
                    <Image
                      className={cn(s.image)}
                      src={`https://admin.your-rules.com.ua${url}`}
                      alt={name}
                      width={width}
                      height={height}
                    />
                  </Zoom>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Modal>
  );
};
