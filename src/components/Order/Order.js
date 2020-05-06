import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import style from './Order.module.css'

const Order = (props) => {
  return (
    <div className={style.mainOrder}>
      <div className={style.name}>{props.location.state.name}</div>
      <img src={ require('../../assets/' + props.location.state.img) } />
      <div className={style.price}>{props.location.state.price}</div>
      <div className={style.btnControl}>
        {/* <button className={style.btnBuy} onClick={OrderBuy}>Купить</button> */}
        <NavLink className={style.btnBuy} to="/OrderForm">Купить</NavLink>
        <NavLink className={style.btnOff} to="/cart">Отменить</NavLink>
      </div>
    </div>
  )
}

export default withRouter(Order)