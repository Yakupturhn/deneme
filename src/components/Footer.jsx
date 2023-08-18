import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/site";

const Footer = () => {
  const { dark, language } = useSelector((state) => state.site);

  const dispatch = useDispatch();
  const languages = ["tr", "en"];

  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      Footer
      <div>
        {languages.map((lang, i) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === language ? "active" : ""}
            key={i}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "light moda geçt" : "dark moda geç"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
