import styles from "./Input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Input({ title, value, onChange: changeValue, inputRef }) {
  return (
    <div className={`${styles.wrapper}`}>
      <p>{title}</p>
      <div className={`${styles["input-group"]}`}>
        <input
          ref={inputRef}
          className={`${styles["input"]}`}
          value={value}
          onChange={(e) => changeValue(e.target.value.toUpperCase())}
          placeholder={`Nhập ${title}`}
          spellCheck={false}
        />
        {value ? (
          <FontAwesomeIcon
            onClick={(e) => changeValue("")}
            className={`${styles.icon}`}
            icon={faXmark}
          />
        ) : undefined}
        <span className={styles.slice}></span>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faChevronDown} />
      </div>
    </div>
  );
}

export default Input;
