import * as ActionTypes from "../ActionTypes";

const initVal = {
    isLoading: false,
    cart: [],
    error: ''
}

export const CartReducer = (state = initVal, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
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
                            quantity: v.quantity - 1
                        })
                    } else {
                        return v;
                    }
                })
            }

        default:
            return state;

    }

}