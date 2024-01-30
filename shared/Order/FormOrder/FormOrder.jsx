"use client";

//library
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
//components
import { CustomSelect } from "./CustomSelect";


//styles
import s from "./FormOrder.module.scss";
import { Text } from "@/shared";
import {
  getAllCategories,
  getAllProducts,
  createOrderByUkraine,
  createOrderByWorld,
  getNewCollection,
  getCorsets,
  getDresses,
} from "@/services/api";
import { normalizeDataProducts, validationCustomSelect } from "@/helpers";
import { UkrainianFields } from "./UkrainianFields";
import { OverseasFields } from "./OverseasFields";
import { ModalSuccess } from "../../ModalSuccess/ModalSuccess";


export const FormOrder = () => {
  const el = useRef(null);
  const [isNotFull, setIsNotFull] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);

  const [categoryData, setCategoryData] = useState({});
  const [productData, setProductData] = useState({});

  const [activeShipping, setActiveShipping] = useState("Ukraine");
  const [categoryValue, setCategoryValue] = useState([]);
  const [productValue, setProductValue] = useState([]);

  const [changeProductsOption, setChangeProductsOption] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // event.target.elements.forEach((item)=> console.log(item))
    const elements = event.target.elements;
    const elementsName = Object.keys(elements);

    elementsName.forEach((name) => {
      if (!elements[name].value) {
        elements[name].classList.add("invalid");
      } else {
        elements[name].classList.remove("invalid");
      }

      validationCustomSelect(elements, name, "category");
      validationCustomSelect(elements, name, "product");
    });

    const data = Array.from(new FormData(el.current));

    // data.forEach((el) => console.log(el));
    const formDataInput = data.reduce((acc, [name, value]) => {
      return { ...acc, ...{ [name]: value } };
    }, {});

    const fullFormData = {
      ...formDataInput,
      ...categoryValue,
      ...productValue,
    };

    function checkFrom(fullFormData) {
      const arrValues = Object.values(fullFormData);
      // console.log(arrValues);
      return arrValues.every((value) => value.trim() !== "");
    }

    if (checkFrom(fullFormData)) {
      setIsNotFull(false);
      try {
        if (activeShipping === "Ukraine") {
          console.log(fullFormData);
          const response = await createOrderByUkraine(fullFormData);
          // console.log("response: ", response);
          if (response) {
            setIsOpenSuccessModal(true);
          }
        } else {
          const response = await createOrderByWorld(fullFormData);
          if (response) {
            setIsOpenSuccessModal(true);
          }
        }
        event.target.reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsNotFull(true);
    }
  };

  useEffect(() => {
    (async () => {
      const categories = await getAllCategories();
      setCategoryData(categories);

      const products = await getAllProducts();
      setProductData(products);
    })();
  }, []);

  async function changeCategory(value) {
    if (value === "new") {
      setChangeProductsOption(true);
      setProductValue([]);
      const data = await getNewCollection();
      setProductData(normalizeDataProducts(data));
    }
    if (value === "corsets") {
      setChangeProductsOption(true);
      setProductValue([]);
      const data = await getCorsets();
      setProductData(normalizeDataProducts(data));
    }
    if (value === "dresses") {
      setChangeProductsOption(true);
      setProductValue([]);
      const data = await getDresses();
      setProductData(normalizeDataProducts(data));
    }
  }
  //using animation true(one) and false(always) when you see this el in viewport
  const isInView = useInView(el, {
    once: true,
  });

  return (
    <>
      <div className={s.wrapship}>
        <Text
          size="xs"
          className={cn(s.text, { [s.active]: activeShipping === "Ukraine" })}
          onClick={() => setActiveShipping("Ukraine")}
        >
          Shipping within Ukraine
        </Text>
        <Text
          size="xs"
          className={cn(s.text, { [s.active]: activeShipping === "World" })}
          onClick={() => setActiveShipping("World")}
        >
          Shipping overseas
        </Text>
      </div>
      <form
        noValidate
        ref={el} //style animation
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s",
        }}
        className={cn(s.form, "order-form")}
        onSubmit={handleSubmit}
      >
        <CustomSelect
          name="category"
          placeholder={"Category"}
          options={categoryData}
          setNewData={(value) => {
            setCategoryValue({ category: value });
            changeCategory(value);
          }}
        />{" "}
        <CustomSelect
          name="product"
          changeOption={changeProductsOption}
          options={productData}
          placeholder={"Product"}
          setNewData={(value) => {
            setProductValue({ product: value });
            setChangeProductsOption(false);
          }}
        />
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.number)}
            type="phone"
            name="phone"
            placeholder=" "
            id="phone"
            required
          />
          <label className={cn(s.label)} htmlFor="phone">
            Phone number
          </label>
        </div>
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.number)}
            type="email"
            name="email"
            placeholder=" "
            id="email"
            required
          />
          <label className={cn(s.label)} htmlFor="email">
            Email address
          </label>
        </div>
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.name)}
            type="text"
            name="full_name"
            placeholder=" "
            id="full_name"
            required
          />
          <label className={cn(s.label)} htmlFor="full_name">
            Full name
          </label>
        </div>
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.name)}
            type="text"
            name="instagram"
            placeholder=" "
            id="instagram"
            required
          />
          <label className={cn(s.label)} htmlFor="full_name">
            Instagram
          </label>
        </div>
        {activeShipping === "Ukraine" ? (
          <UkrainianFields />
        ) : (
          <OverseasFields />
        )}
        <p
          className={cn(s.messageFullFields, {
            [s.visible]: isNotFull,
            ["visually-hidden"]: !isNotFull,
          })}
        >
          please fill in all input fields
        </p>
        <button className={s.submitBtn} type="submit" value=" ">
          Book
        </button>
      </form>
      <ModalSuccess
        isOpen={isOpenSuccessModal}
        setIsOpen={setIsOpenSuccessModal}
      />
    </>
  );
};
