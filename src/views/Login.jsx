import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../stores/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogin = () => {
    //istek kısmı
    //data...
    const dummyData = {
      id: 1,
      name: "yakup",
      token: "we12esdwe1we1wewew",
    };
    dispatch(login(dummyData));
    // navigate("/");
  };

  return (
    <div style={{ background: "lightblue" }}>
      Giriş yap
      <button onClick={handleLogin}>Giriş yapmak için tıklayın</button>
    </div>
  );
};

export default Login;
