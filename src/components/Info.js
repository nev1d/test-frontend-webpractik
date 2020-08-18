import React from "react"
import about1 from "../img/about-01.png"
import about2 from "../img/about-02.png"
import about3 from "../img/about-03.png"

export default function Info () {
    return (
        <div className="info">
            <div className="info__content _container">
                <div className="info__column">
                    <div className="info__picture"><img src={about1} alt=""/></div>
                    <div className="info__body">
                        <div className="info__title">Изготавливаем пиццу по своим рецептам в лучших традициях</div>
                        <div className="info__subtitle">Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам</div>
                    </div>
                </div>
                <div className="info__column info__column_secondary">
                    <div className="info__picture"><img src={about2} alt=""/></div>
                    <div className="info__body">
                        <div className="info__title info__title_secondary">Используем только свежие ингридиенты</div>
                        <div className="info__subtitle info__subtitle_secondary">Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения</div>
                    </div>
                </div>
                <div className="info__column">
                    <div className="info__picture"><img src={about3} alt=""/></div>
                    <div className="info__body">
                        <div className="info__title">Доставка в течение 60 минут или заказ за нас счёт</div>
                        <div className="info__subtitle">Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях</div>
                    </div>
                </div>
            </div>
        </div>
    )
}