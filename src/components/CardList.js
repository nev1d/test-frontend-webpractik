import React from "react"
import Card from "./Card";
import {connect} from "react-redux";

const CardList = ({cards}) => {
    return cards.map(card => <Card card={card} key={card.id}/>)
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(CardList)