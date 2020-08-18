import {combineReducers} from "redux"
import cardsReducer from "./cardsReducer";
import basketReducer from "./basketReducer";

export const rootReducer = combineReducers({
    cards: cardsReducer,
    basketCards: basketReducer
})