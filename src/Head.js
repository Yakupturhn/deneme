import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "./context/AuthContext";

export default function Head() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "yakup",
        id: 1,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <header>
      HEADER <br />
      {(user && <button onClick={logout}>Çıkış yap</button>) || (
        <button onClick={login}>Giriş yap</button>
      )}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </header>
  );
}
