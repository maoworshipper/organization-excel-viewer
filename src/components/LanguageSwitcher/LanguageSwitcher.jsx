import { useEffect } from "react";
import { useLanguageStore } from "../../store/language";
import { Button } from "@mui/material/";
import { TEXT } from "../../strings";
import styles from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = () => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  useEffect(() => {
    const body = document.querySelector("body");
    if (language === "es") {
      body.setAttribute("lang", "es");
    } else {
      body.setAttribute("lang", "en");
    }
  }, [language]);

  const handleLanguageChange = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        onClick={handleLanguageChange}
        tile={TEXT[language].CHANGE_LANGUAGE}
      >
        {language === "es" ? "English" : "Español"}
      </Button>
    </div>
  );
};
