import * as ActionTypes from "../ActionTypes";

const initVal = {
    isLoading: false,
    products: [],
    error: ''
}

export const ProductsAdminReducer = (state = initVal, action) => {

    switch (action.type) {

        case ActionTypes.GET_PRODUCTS_DATA:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: ''
            }

        case ActionTypes.PRODUCTS_ADD:
            return {
                ...state,
                isLoading: false,
                products: state.products.concat(action.payload),
                error: ''
            }

        case ActionTypes.PRODUCTS_DELETE:
            return {
                ...state,
                isLoading: false,
                products: state.products.filter((l) => l.id !== action.payload),
                eerror: ''
            }

        case ActionTypes.PRODUCTS_UPDATE:
            return {
                ...state,
                isLoading: false,
                products: state.products.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
            }

        default:
            return state;

    }

}