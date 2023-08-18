import Home from "./views/Home";
import Profil from "./views/Profile";
import About from "./views/About";
import Login from "./views/Login";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    protectedPage: false,
  },
  {
    path: "/about",
    exact: true,
    component: About,
    protectedPage: false,
  },
  {
    path: "/profile",
    exact: true,
    component: Profil,
    protectedPage: false,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    protectedPage: false,
  },
];
