import { useSite } from "./context/SiteContext";
export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "SWITCH_THEME",
      value: theme === "light" ? "dark" : "light",
    });
  };
  return (
    <>
      Mevcut tema = {theme} <br />
      <button onClick={switchTheme}>Temayı değiştir</button>
    </>
  );
}
