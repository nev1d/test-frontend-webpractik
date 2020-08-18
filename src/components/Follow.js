import React from "react"
import picture from "../img/inst-01.png"

export default function Follow () {
    return (
        <div className="follow">
            <div className="follow__content _container">
                <div className="follow__body">
                    <div className="follow__title">Следите за нами в Instagram</div>
                    <div className="follow__subtitle">@pizzamenu</div>
                </div>
            </div>
            <div className="follow__pictures pictures-column">
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
                    <div className="follow__picture"><img src={picture} alt=""/></div>
            </div>
        </div>
    )
}
