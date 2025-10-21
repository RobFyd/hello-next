import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  return (
    <select className={styles.languageSelector}>
      <option value="EN">English</option>
      <option value="PL">Polish</option>
    </select>
  );
}
