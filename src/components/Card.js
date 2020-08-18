import React, {useState} from "react"
import {connect} from "react-redux";
import {addToCart} from "../redux/actions";
import background1400 from "../img/pizza1400.png";

function Card (props) {
    const [size, setSize] = useState("medium");

    const setLarge = () => setSize("large");
    const setMedium = () => setSize("medium");
    const setSmall = () => setSize("small");

    const [price, setPrice] = useState(props.card.price.medium)
    const [picture, setPicture] = useState(props.card.picture.medium)

    function chosePizza(event) {
        const pizzaSize = event.target.getAttribute("data-pizzasize")
        event.target.parentNode.childNodes.forEach(e => e.classList.remove("pizza-size__choose_size-selected"))
        event.target.classList.add("pizza-size__choose_size-selected" )
        for (let key in props.card.price) {
            if (key === pizzaSize) {
                setPrice(props.card.price[key])
            }
        }
        if (pizzaSize === "small") {
            setSmall()
            setPicture(props.card.picture.small)
        } else if (pizzaSize === "medium") {
            setMedium()
            setPicture(props.card.picture.medium)
        } else if (pizzaSize === "large"){
            setLarge()
            setPicture(props.card.picture.large)
        }
    } // Добавляет класс selected для выбранного размера. Обновляет цену в зависимости от размера.
      // Обновляет размер картинки в зависимости от размера

    const classPizzaType = `card _pizza-type__${props.card.type}`

    function infoForCart() {
        const cartInfo = {
            picture: picture,
            price: price,
            size: size,
            type: props.card.type,
            title: props.card.title,
            quantity: 1,
            id: props.card.id
        }
        props.addToCart(cartInfo)
    } // Сбор информации для добавления в корзину и добавление в корзину.

    function dynamicButtonContent() {
        if (document.documentElement.clientWidth <= 515) {
            return `от ${price} руб.`
        } else return "ЗАКАЗАТЬ"
    } // Изменение контента кнопки в зависимости от размеров девайса

    return (
         <div className={classPizzaType}>
             <div className="card__container">
                <div className="card__item card-item" data-pizzatype={props.card.type}>
                    <div className="card-item__picture">
                            <img src={picture} alt=""/>
                    </div>
                    <div className="card-item__title">{props.card.title}</div>
                    <div className="card-item__subtitle">{props.card.subtitle}</div>
                    <div className="card-item__size pizza-size">
                        <div className="pizza-size__title">Размер, см:</div>
                        <div className="pizza-size__list">
                            <div className="pizza-size__choose" data-pizzasize="small" onClick={chosePizza}> 20</div>
                            <div className="pizza-size__choose pizza-size__choose_size-selected" data-pizzasize="medium" onClick={chosePizza}>30</div>
                            <div className="pizza-size__choose" data-pizzasize="large" onClick={chosePizza}>40</div>
                        </div>
                    </div>
                    <div className="card-item__price">от {price} руб.</div>
                    <button className="card-item__button" onClick={infoForCart}>{dynamicButtonContent()}</button>
                </div>
             </div>
         </div>
    )
}

const mapDispatchToProps = {
    addToCart,
}

export default connect(null, mapDispatchToProps)(Card)