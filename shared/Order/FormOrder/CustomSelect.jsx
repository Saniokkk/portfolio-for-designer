"use client";

import Select from "react-select";
import { useState, useEffect } from "react";
import "./CustomSelect.scss";

export const CustomSelect = ({
  setNewData,
  placeholder,
  options,
  changeOption,
  name,
}) => {

  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

	// Must be deleted once
	// https://github.com/JedWatson/react-select/issues/5459 is fixed.
	useEffect(() => setIsMounted(true), []);
  const [currentSelect, setCurrentSelect] = useState("");
  const isMulti = false;

  const getValue = () => {
    if (currentSelect) {
      return isMulti
        ? options.filter((item) => currentSelect.indexOf(item.value) >= 0)
        : options.find((item) => item.value === currentSelect);
    } else {
      return isMulti ? [] : null;
    }
  };

  const onChange = (newValue, actionMeta) => {
    console.log(actionMeta);
    setCurrentSelect(
      isMulti ? newValue.map((item) => item.value) : newValue.value,
    );
    setNewData(newValue.value);
  };
  return isMounted ? (
    <Select
      id={id}
      name={name}
      classNamePrefix="customSelect"
      options={options}
      value={changeOption ? null : getValue()}
      placeholder={placeholder}
      isSearchable={false}
      onChange={onChange}
    />
  ) : null;
};
