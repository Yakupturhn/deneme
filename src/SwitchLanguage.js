import { useSite } from "./context/SiteContext";

export default function SwitchLanguage() {
  const { language, dispatch } = useSite();

  const switchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };
  return (
    <>
      Mevcut dil ={language} <br />
      <button onClick={switchLanguage}>Dili değiştir</button>
    </>
  );
}
