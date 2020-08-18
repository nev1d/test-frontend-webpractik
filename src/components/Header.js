import React from "react"
import logo from "../img/logo.png"
import Basket from "./Basket";

export default function Header() {

    function openBurger () {
        document.querySelector(".menu").classList.add("active")
        document.querySelector(".burger-menu").classList.add("active")
    } // Открытие бургера
    function closeBurger () {
        document.querySelector(".menu").classList.remove("active")
        document.querySelector(".burger-menu").classList.remove("active")
    } // Закрытие бургера

    window.onscroll = function changeHeader () {
        const header = document.querySelector(".header")
        if (document.documentElement.clientWidth > 834) {
            if (window.pageYOffset > 70) {
                header.classList.add("_window-scrolled")
            } else {
                header.classList.remove("_window-scrolled")
            }
        } else {
            if (window.pageYOffset > 70) {
                header.classList.add("_window-mobile-scrolled")
            } else {
                header.classList.remove("_window-mobile-scrolled")
            }
        }
    } // В зависимости от ширины девайса добавляет к меню класс, который появляется при скролле.

    return (
        <div className="header">
            <div className="header__content _container">
                <div className="header__column">
                    <div className="header__logo"><img src={logo} alt=""/></div>
                </div>
                <div className="header__column">
                    <div className="header__menu menu">
                        <div className="menu__close" onClick={closeBurger} />
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li><a href="#" className="menu__item">МЕНЮ</a></li>
                                <li><a href="#" className="menu__item menu__item_active">О НАС</a></li>
                                <li><a href="#" className="menu__item">КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                        <div className="menu__contact menu-contact">
                            <div className="menu-contact__title">ЗАКАЗАТЬ ПО ТЕЛЕФОНУ</div>
                            <div className="menu-contact__phone">+7 (918) 432-65-87</div>
                            <div className="menu-contact__subtitle">Ежедневно с 9:00 до 23:00</div>
                        </div>
                        <div className="menu__language">ENGLISH</div>
                    </div>
                </div>
                <div className="header__column">
                    <div className="header__contacts contacts-header">
                        <div className="contacts-header__item">
                            <a href="tel:79184326587" className="contacts-header__number">+7 (918) 432-65-87</a>
                            <div className="contacts-header__label">Ежедневно с 9:00 до 23:00</div>
                        </div>
                    </div>
                </div>
                <div className="header__column">
                    <Basket />
                </div>
                <div className="header__column">
                    <div className="header__language language">EN</div>
                </div>
                <div className="header__column">
                    <div className="header__burger burger-menu" onClick={openBurger}><span /></div>
                </div>
            </div>
        </div>
    )
}