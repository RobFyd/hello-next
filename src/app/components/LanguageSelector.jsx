"use client";
import { useState } from "react";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <>
      <p>Selected Language: {selectedOption}</p>
      <select
        className={styles.languageSelector}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="EN">English</option>
        <option value="PL">Polish</option>
      </select>
    </>
  );
}
