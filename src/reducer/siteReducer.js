export default function reducer(state, action) {
  switch (action.type) {
    case "SWITCH_THEME":
      const theme = action.value;
      localStorage.setItem("theme", theme);
      return {
        ...state,
        theme,
        // theme: state.theme === "light" ? "dark" : "light",
      };

    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        language: state.language === "tr" ? "en" : "tr",
      };
  }
}
