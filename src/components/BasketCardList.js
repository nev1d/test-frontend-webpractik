import React from "react"
import {connect} from "react-redux";
import BasketCard from "./BasketCard";

const BasketCardList = ({cards}) => {
    if (cards.length > 0) {
        return cards.map(card => <BasketCard card={card} key={card.id} />)
    }
    return <div className="popup-content__empty-basket">Корзина пуста</div>
}

const mapStateToProps = state => {
    return {
        cards: state.basketCards
    }
}

export default connect(mapStateToProps)(BasketCardList)