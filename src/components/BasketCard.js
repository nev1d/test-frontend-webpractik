import React from "react"
import {removeFromCart, updateQuantity} from "../redux/actions";
import {connect} from "react-redux";

function BasketCard(props) {

    function plusQuantity() {
        const infoForUpdateQuantity = {
            id: props.card.id,
            size: props.card.size,
            quantity: props.card.quantity + 1
        }
        props.updateQuantity(infoForUpdateQuantity)
    } // Обновляет количество пицц. Плюс.


    function minusQuantity () {
        const infoForUpdateQuantity = {
            id: props.card.id,
            size: props.card.size,
            quantity: props.card.quantity - 1
        }
        props.updateQuantity(infoForUpdateQuantity)
    } // Обновляет количество пицц. Минус

    if (props.card.quantity < 1) {
        const infoForUpdateQuantity = {
            id: props.card.id,
            size: props.card.size,
            quantity: 1
        }
        props.updateQuantity(infoForUpdateQuantity)
    } // Предотвращает нулевое и орицательные значения количества пицц.


    function infoForCart() {
        const cartInfo = {
            id: props.card.id,
            size: props.card.size
        }
        props.removeFromCart(cartInfo)
    } // Сбор информации и удаление из корзины.

    function getSize() {
        switch (props.card.size) {
            case "small": return "20 см";
            case "medium": return "30 см";
            case "large": return "40 см";
            default: return "30 см";
        }
    } // Смена размера для блока ..__size

    const totalPrice = props.card.quantity*props.card.price

    const basketPizzaType = `basket-card basket-card__pizza-type_${props.card.type}`

    return (
        <div className={basketPizzaType}>
          <div className="basket-card__content">
              <div className="basket-card__picture"><img src={props.card.picture} alt=""/></div>
              <div className="basket-card__info">
                  <div className="basket-card__title">{props.card.title}</div>
                  <div className="basket-card__size">{getSize()}</div>
              </div>
              <div className="basket-card__quantity card-quantity">
                  <div className="card-quantity__minus" onClick={minusQuantity} />
                  <div className="card-quantity__quantity">{props.card.quantity}</div>
                  <div className="card-quantity__plus" onClick={plusQuantity} />
              </div>
              <div className="basket-card__price">{totalPrice} руб.</div>
              <div className="basket-card__remove" onClick={infoForCart}>&times;</div>
          </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeFromCart,
    updateQuantity
}

export default connect(null, mapDispatchToProps)(BasketCard)