import React from "react"
import iconOrder from "../img/icon-order.png"
import iconDelivery from "../img/icon-delivery.png"
import iconPay from "../img/icon-pay.png"

export default function Delivery () {
    return (
        <div className="delivery">
            <div className="delivery__content _container">
                <div className="delivery__main">
                    <div className="delivery__title">Доставка и оплата</div>
                    <div className="delivery__steps steps-list">
                        <div className="steps-list__item steps-item">
                            <div className="steps-item__picture"><img src={iconOrder} alt=""/></div>
                            <div className="steps-item__body">
                                <div className="steps-item__title">Заказ</div>
                                <div className="steps-item__subtitle">После оформления заказа мы свяжемся с вами для уточнения деталей.</div>
                            </div>
                        </div>
                        <div className="steps-list__item steps-item">
                            <div className="steps-item__picture"><img src={iconDelivery} alt=""/></div>
                            <div className="steps-item__body">
                                <div className="steps-item__title">Доставка курьером</div>
                                <div className="steps-item__subtitle">Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.</div>
                            </div>
                        </div>
                        <div className="steps-list__item steps-item">
                            <div className="steps-item__picture"><img src={iconPay} alt=""/></div>
                            <div className="steps-item__body">
                                <div className="steps-item__title">Оплата</div>
                                <div className="steps-item__subtitle">Оплатить можно наличными или картой курьеру. И золотом тоже можно.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}