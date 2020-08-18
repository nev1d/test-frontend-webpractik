import {
    ADD_TO_CART,
    CHOSE_ALL,
    CHOSE_CHEESE,
    CHOSE_MEAT,
    CHOSE_SPICY,
    CHOSE_VEGAN,
    REMOVE_FROM_CART, UPDATE_QUANTITY,
} from "./types";

export default function choseMeat() {
    return {
        type: CHOSE_MEAT,
    }
}

export function choseAll() {
    return {
        type: CHOSE_ALL,
    }
}

export function choseSpicy() {
    return {
        type: CHOSE_SPICY,
    }
}

export function choseCheese() {
    return {
        type: CHOSE_CHEESE,
    }
}

export function choseVegan() {
    return {
        type: CHOSE_VEGAN,
    }
}

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_FROM_CART,
        payload: payload
    }
}


export function updateQuantity(payload) {
    return {
        type: UPDATE_QUANTITY,
        payload: payload
    }
}