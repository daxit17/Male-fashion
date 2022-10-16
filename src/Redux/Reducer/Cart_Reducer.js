import * as ActionTypes from "../ActionTypes";

const initVal = {
    isLoading: false,
    cart: [],
    error: ''
}

export const CartReducer = (state = initVal, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CART:

            const Cdata = state.cart.find((s) => s.id === action.payload.id)

            if (Cdata) {
                Cdata.quantity++;
            } else {
                state.cart.push(action.payload)
            }

            return {
                ...state,
                isLoading: false,
                // cart: state.cart.concat(action.payload),
                error: ''
            }

        case ActionTypes.INCREMENT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((v) => {
                    if (v.id === action.payload) {
                        return (
                            {
                                id: v.id,
                                quantity: v.quantity + 1
                            }
                        )
                    } else {
                        return v;
                    }
                })
            }

        case ActionTypes.DECREMENT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((v) => {
                    if (v.id === action.payload) {
                        return ({
                            id: v.id,
                            quantity: v.quantity >= 1 ? v.quantity - 1 : 0
                        })
                    } else {
                        return v;
                    }
                })
            }

        case ActionTypes.DELETE_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((v) => v.id !== action.payload),
                error: ''
            }

        default:
            return state;

    }

}