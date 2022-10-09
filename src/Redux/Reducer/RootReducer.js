import { combineReducers } from "redux";
import { alertReducer } from "./Alert_Reducer";
import { authReducer } from "./Auth_Reducer";
import { CartReducer } from "./Cart_Reducer";
import { CategoryAdminReducer } from "./Category_Admin_Reducer";
import { ProductsAdminReducer } from "./Products_Admin_Reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    category:CategoryAdminReducer,
    products:ProductsAdminReducer,
    cart:CartReducer
})