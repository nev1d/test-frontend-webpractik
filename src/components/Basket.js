import React, {useState} from "react"
import close from "../img/close.png"
import BasketCardList from "./BasketCardList";
import {connect} from "react-redux";

 function Basket (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let totalPrice = props.cards.reduce((prev, current) => {return prev + (current.quantity*current.price)}, 0)

     function dynamicOrder() {
        if (props.cards.length === 0) {
            return "Корзина пуста"
        } else if (props.cards.length === 1) {
            return `${props.cards[0].title} пицца`
        } else if (props.cards.length > 1) {
            return `${props.cards[0].title} и еще ${props.cards.length - 1} пицца(ы)`
        }

     } // Динамическое описание под корзиной
    return (
        <>
            <div className="header__basket basket-header" onClick={handleShow}>
                <div className="basket-header__row">
                    <span>{props.cards.length}</span>
                    <div className="basket-header__order">ВАШ ЗАКАЗ</div>
                    <div className="basket-header__dynamic-order">{dynamicOrder()}</div>
                </div>
            </div>
            { show &&
                <div className="basket-popup">
                    <div className="basket-popup__overlay">
                        <div className="basket-popup__window">
                            <div className="basket-popup__content _container popup-content">
                                <div className="popup-content__header popup-header">
                                    <div className="popup-header__title">Ваш заказ</div>
                                    <div className="popup-header__close" onClick={handleClose}><img src={close} alt=""/></div>
                                </div>
                                <div className="popup-content__card-list">
                                    <BasketCardList />
                                </div>
                                <div className="popup-content__total-price total-price">
                                    <div className="total-price__title">Сумма заказа:</div>
                                    <div className="total-price__price">{totalPrice} руб</div>
                                </div>
                                <div className="popup-content__contacts popup-contacts">
                                    <div className="popup-contacts__title">Контакты</div>
                                    <div className="popup-contacts__body popup-contact-body">
                                        <div className="popup-contact-body__group">
                                            <div className="popup-contact-body__name">
                                                <input id="name" className="popup-contact-body__input" placeholder="Ваше имя" type="text"/>
                                            </div>
                                            <div className="popup-contact-body__phone">
                                                <input className="popup-contact-body__input" placeholder="Телефон" type="text"/>
                                            </div>
                                        </div>
                                        <div className="popup-contact-body__address">
                                            <input className="popup-contact-body__input" placeholder="Адрес доставки" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup-content__payment popup-payment">
                                    <div className="popup-payment__title">Способ оплаты</div>
                                    <div className="popup-payment__chose"><input type="radio" name="payment"/><div className="popup-payment__subtitle">Оплата наличными или картой курьеру</div></div>
                                    <div className="popup-payment__chose"><input type="radio" name="payment"/><div className="popup-payment__subtitle">Оплата картой онлайн на сайте</div></div>
                                </div>
                                <div className="popup-content__order popup-order">
                                    <button className="popup-order__button">ОФОРМИТЬ ЗАКАЗ</button>
                                    <div className="popup-order__policy">Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.basketCards
    }
}

export default connect(mapStateToProps)(Basket)