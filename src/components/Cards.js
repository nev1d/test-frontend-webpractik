import React from "react"
import CardList from "./CardList";
import {connect} from "react-redux";
import choseMeat, {choseAll, choseCheese, choseSpicy, choseVegan} from "../redux/actions";

function Cards (props) {

 function pizzaFilter(event) {
     event.preventDefault()
     event.target.parentNode.parentNode.childNodes.forEach(e => e.firstChild.classList.remove("filter-cards__item_active"))
     event.target.classList.add("filter-cards__item_active" )
 } // Добавляет класс active в зависимости от выбранного фильтра.

 return (
     <div className="cards">
         <div className="cards__content _container">
             <div className="cards__filter filter-cards">
                 <div className="filter-cards__title">Выберите пиццу</div>
                 <ul className="filter-cards__list">
                     <li onClick={pizzaFilter}><div className="filter-cards__item filter-cards__item_all filter-cards__item_active" onClick={props.choseAll}>ВСЕ</div></li>
                     <li onClick={pizzaFilter}><div className="filter-cards__item filter-cards__item_spicy" onClick={props.choseSpicy}>ОСТРЫЕ</div></li>
                     <li onClick={pizzaFilter}><div className="filter-cards__item filter-cards__item_meat" onClick={props.choseMeat}>МЯСНЫЕ</div></li>
                     <li onClick={pizzaFilter}><div className="filter-cards__item filter-cards__item_cheese" onClick={props.choseCheese}>СЫРНЫЕ</div></li>
                     <li onClick={pizzaFilter}><div className="filter-cards__item filter-cards__item_vegan" onClick={props.choseVegan}>ВЕГАНСКИЕ</div></li>
                 </ul>
             </div>
             <div className="cards__list">
                 <CardList />
             </div>
         </div>
     </div>
 )
}

const MapDispatchToProps = {
    choseMeat,
    choseCheese,
    choseAll,
    choseSpicy,
    choseVegan
}

export default connect(null, MapDispatchToProps)(Cards)