import React from "react"
import event1 from "../img/event-1.png"
import event2 from "../img/event-2.png"
import event3 from "../img/event-3.png"
import background from "../img/pizza.png"
import background1400 from "../img/pizza1400.png"
import background1200 from "../img/pizza1200.png"
import background1020 from "../img/pizza1020.png"
import background834 from "../img/pizza834.png"
import background760 from "../img/pizza760.png"
import background414 from "../img/pizza414.png"

export default function Intro() {

    function chooserFirst(e) {
        e.target.parentNode.childNodes.forEach(e => e.classList.remove("chooser-buttons__item_selected"))
        e.target.classList.add("chooser-buttons__item_selected")
        const content = document.getElementsByClassName("intro-chooser__content")[0]
        const event = document.getElementsByClassName("intro-chooser__event")[0]
        content.childNodes.forEach(e => e.classList.remove("intro-chooser__event_active"))
        event.classList.add("intro-chooser__event_active")
    }

    function chooserSecond(e) {
        e.target.parentNode.childNodes.forEach(e => e.classList.remove("chooser-buttons__item_selected"))
        e.target.classList.add("chooser-buttons__item_selected")
        const content = document.getElementsByClassName("intro-chooser__content")[0]
        const event = document.getElementsByClassName("intro-chooser__event")[1]
        content.childNodes.forEach(e => e.classList.remove("intro-chooser__event_active"))
        event.classList.add("intro-chooser__event_active")
    }

    function chooserThird(e) {
        e.target.parentNode.childNodes.forEach(e => e.classList.remove("chooser-buttons__item_selected"))
        e.target.classList.add("chooser-buttons__item_selected")
        const content = document.getElementsByClassName("intro-chooser__content")[0]
        const event = document.getElementsByClassName("intro-chooser__event")[2]
        content.childNodes.forEach(e => e.classList.remove("intro-chooser__event_active"))
        event.classList.add("intro-chooser__event_active")
    }

    // Объединить. Убрать повторябщийся код. Привязать скорей всего по индексу.

    function setBackground () {
        if (document.documentElement.clientWidth <= 1400 && document.documentElement.clientWidth > 1200) {
            return background1400
        }
        else if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 1020) {
            return background1200
        }
        else if (document.documentElement.clientWidth <= 1020 && document.documentElement.clientWidth > 834) {
            return background1020
        }
        else if (document.documentElement.clientWidth <= 834 && document.documentElement.clientWidth > 760) {
            return background834
        }  else if (document.documentElement.clientWidth <= 760 && document.documentElement.clientWidth > 414) {
            return background760
        } else if (document.documentElement.clientWidth <= 414 && document.documentElement.clientWidth > 0) {
            return background414
        }
        else return background
    }

    // Сделать событие сверху на Resize. Пока не пойму как.
    // Скорей всего полностью переделать все что выше, но пока все ломает если добавлять -right, -left к дефолтной картинке

    return (
        <div className="intro">
            <div className="intro__background">
                <img src={setBackground()} alt=""/>
            </div>
            <div className="intro__content _container">
                <div className="intro__top">
                    <div className="intro__column">
                        <div className="intro__title">Пицца на заказ</div>
                    </div>
                    <div className="intro__column">
                        <div className="intro__subtitle">
                          <p>Бесплатная и быстрая доставка за час</p>
                            <p>в любое удобное для вас время</p>
                        </div>
                    </div>
                    <div className="intro__column">
                        <button className="intro__button">ВЫБРАТЬ ПИЦЦУ</button>
                    </div>
                </div>
                <div className="intro__bottom">
                    <div className="intro__events events-intro">
                        <div className="events-intro__logo"><img src={event1} alt=""/></div>
                        <div className="events-intro__title">Закажи 2 пиццы – 3-я в подарок</div>
                        <div className="events-intro__subtitle">При заказе 2-х больших пицц – средняя пицца в подарок</div>
                    </div>
                    <div className="intro__events events-intro">
                        <div className="events-intro__logo"><img src={event2} alt=""/></div>
                        <div className="events-intro__title">Напиток в подарок</div>
                        <div className="events-intro__subtitle">Скидка на заказ от 3 000 рублей + напиток в подарок</div>
                    </div>
                    <div className="intro__events events-intro">
                        <div className="events-intro__logo"><img src={event3} alt=""/></div>
                        <div className="events-intro__title">25% при первом заказе</div>
                        <div className="events-intro__subtitle">Скидка новым клиентам!</div>
                    </div>
                </div>
                <div className="intro__chooser intro-chooser">
                    <div className="intro-chooser__content">
                        <div className="intro-chooser__event intro-chooser__event_active">
                            <div className="events-intro__logo"><img src={event1} alt=""/></div>
                            <div className="events-intro__title">Закажи 2 пиццы – 3-я в подарок</div>
                            <div className="events-intro__subtitle">При заказе 2-х больших пицц – средняя пицца в подарок</div>
                        </div>
                        <div className="intro-chooser__event">
                            <div className="events-intro__logo"><img src={event2} alt=""/></div>
                            <div className="events-intro__title">Напиток в подарок</div>
                            <div className="events-intro__subtitle">Скидка на заказ от 3 000 рублей + напиток в подарок</div>
                        </div>
                        <div className="intro-chooser__event">
                            <div className="events-intro__logo"><img src={event3} alt=""/></div>
                            <div className="events-intro__title">25% при первом заказе</div>
                            <div className="events-intro__subtitle">Скидка новым клиентам!</div>
                        </div>
                    </div>
                    <div className="intro-chooser__buttons chooser-buttons">
                        <div className="chooser-buttons__item chooser-buttons__item_selected" onClick={chooserFirst} />
                        <div className="chooser-buttons__item" onClick={chooserSecond}/>
                        <div className="chooser-buttons__item" onClick={chooserThird}/>
                    </div>
                </div>
            </div>
        </div>
    )
}