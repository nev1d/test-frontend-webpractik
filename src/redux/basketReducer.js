import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY} from "./types";

const initialState = []

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.filter(e => !(e.id === action.payload.id && e.size === action.payload.size)).length !== state.length){
                return state.map(e => {
                    if ((e.id === action.payload.id && e.size === action.payload.size)) {
                        return {
                            ...e,
                            quantity: e.quantity + 1
                        }
                    }
                    return e
                })
            } else {
                return state.concat(action.payload);
            }
        case REMOVE_FROM_CART:
            return state.filter(e => !(e.id === action.payload.id && e.size === action.payload.size));
        case UPDATE_QUANTITY:
            return state.map(e => {
                if ((e.id === action.payload.id && e.size === action.payload.size)) {
                    return {
                        ...e,
                        quantity: action.payload.quantity
                    }
                }
                return e
            });
        default:
            return state;
    }
}