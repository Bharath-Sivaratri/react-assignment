import { createStore } from "redux";
import responseReducer from "../Redux/Reducers/PostNews";

const store = createStore(responseReducer);
export default store;
