import Option from "./Option";
import Title from "./Title";
import styles from "./style.module.scss";
import { useState } from "react";
import Select from "react-select";
function MySelect({
  children,
  title,
  optionValues,
  onChange = (v, l) => {},
  ...other
}) {
  return (
    <div className={`${styles.wrapper}`}>
      <Title>{title}</Title>
      <Select
        className={`${styles.select}`}
        onChange={onChange}
        options={optionValues}
        placeholder={`Chọn ${title}`}
        isClearable
        isSearchable
      ></Select>
    </div>
  );
}

export default MySelect;
