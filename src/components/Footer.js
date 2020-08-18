import React from "react"
import logo from "../img/logo-invert.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content _container">
                <div className="footer__logo"><img src={logo} alt=""/></div>
                <div className="footer__contacts contacts-footer">
                    <div className="contacts-footer__item">
                        <a href="tel:79184326587" className="contacts-footer__number">+7 (918) 432-65-87</a>
                        <div className="contacts-footer__label">Ежедневно с 9:00 до 23:00</div>
                    </div>
                </div>
                <div className="footer__policy">Политика конфиденциальности</div>
            </div>
        </div>
    )
}