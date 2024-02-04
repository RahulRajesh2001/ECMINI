import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../frontend/src/stateManagement/loginSlice.js";
import registerReducer from '../../frontend/src/stateManagement/registerSlice.js';
import userReducer from "./stateManagement/userSlice.js";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    users: userReducer, 
  },
});
