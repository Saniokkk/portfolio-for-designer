"use client";

//hooks and library
import { useState } from "react";
import Image from "next/image";
import cn from "classnames";
// import { motion } from "framer-motion";

//component
import { Text, Title } from "@/shared";
import { ModalDetails } from "./ModalDetails/ModalDetails";

//styles
import s from "./Card.module.scss";

export const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeData, setActiveData] = useState(null);
  const img = data.attributes.preview.data;
  const imgHover = data.attributes.preview_hover.data;

return (
  <>
    <li className={cn(s.item)}>
      <div
        onClick={() => {
          setActiveData(data);
          setIsOpen(true);
        }}
      >
        <div className={s.containerImage}>
          <Image
            className={cn(s.image, s.firstImage)}
            src={`https://admin.your-rules.com.ua${img.attributes.url}`}
            alt="card image"
            width={img.attributes.width}
            height={img.attributes.height}
            quality="90"
          />
          <Image
            className={cn(s.image, s.secondImage)}
            src={`https://admin.your-rules.com.ua${imgHover.attributes.url}`}
            alt="card image"
            width={imgHover.attributes.width}
            height={imgHover.attributes.height}
            quality="90"
          />
        </div>
        <Title className={s.title} tag="h3">
          {data?.attributes?.name || "No name"}
        </Title>
        <Text>Price: {data.attributes.price}$</Text>
      </div>
      {activeData && (
        <ModalDetails data={activeData} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </li>
  </>
);
};
