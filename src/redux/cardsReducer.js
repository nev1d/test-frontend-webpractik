import logoSmall from "../img/pizza-01-small.png";
import logoMedium from "../img/pizza-01-medium.png";
import logoLarge from "../img/pizza-01-large.png";
import {CHOSE_ALL, CHOSE_CHEESE, CHOSE_MEAT, CHOSE_SPICY, CHOSE_VEGAN} from "./types";

const initialState = [{
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Итальянская",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 300, large: 500},
    type: "meat",
    id: 1,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Маргарита",
    subtitle: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    price: {small: 200, medium: 300, large: 500},
    type: "meat",
    id: 2,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Барбекю",
    subtitle: "Цыплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    price: {small: 200, medium: 300, large: 500},
    type: "meat",
    id: 3,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Вегетарианская",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "meat",
    id: 4,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Мясная",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "meat",
    id: 5,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Овощная",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "vegan",
    id: 6,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Римская",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "spicy",
    id: 7,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "С грибами",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "vegan",
    id: 8,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Сырная",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "cheese",
    id: 9,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Четыре сыра",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "cheese",
    id: 10,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Пепперони Фреш",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "cheese",
    id: 11,
}, {
    picture: {small: logoSmall, medium: logoMedium, large: logoLarge},
    title: "Ветчина и сыр",
    subtitle: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    price: {small: 200, medium: 390, large: 500},
    type: "cheese",
    id: 12,
}
]

export default function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case CHOSE_MEAT:
            return initialState.filter(e => e.type === "meat");
        case CHOSE_ALL:
            return initialState;
        case CHOSE_CHEESE:
            return initialState.filter(e => e.type === "cheese");
        case CHOSE_SPICY:
            return initialState.filter(e => e.type === "spicy");
        case CHOSE_VEGAN:
            return initialState.filter(e => e.type === "vegan");
        default:
            return state
    }
}