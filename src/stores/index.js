import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Counter";
import siteReducer from "./site";
import authReducer from "./auth";

export default configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
    auth: authReducer,
  },
});
