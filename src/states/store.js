import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducer/index";

export default configureStore({
  reducer: {
    //we are naming incdecReducer as amount here.. so to access it inside the component i have to use amount
    counter : incdecReducer
  }
})