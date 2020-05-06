import React from 'react'
import style from './cartCount.module.css'
import { connect } from 'react-redux'
import { setCart } from '../../redux/catalog-reducer'
import { Link } from 'react-router-dom'

const Cart = (props) => {

  let cartArr = props.cart
  
  const delCartElem = (id) => {
    for (let i = 0; i < cartArr.length; i++) {
      if (cartArr[i].id == id) cartArr.splice(i, 1)
    }
    localStorage.setItem('passe', JSON.stringify(cartArr))
    props.setCart()
  }

  return <div className={cartArr.length == 2 ? style.catalogTwoCart : style.catalogCart
                         && cartArr.length == 1 ? style.catalogOneCart : style.catalogCart}>
    {
      cartArr.map(e => {
      return <div>
        <div className={style.name}>{e.name}</div>
        <img src={ require('../../assets/' + e.img) } />
        <div className={style.price}>{e.price}</div>
        <div className={style.btnControl}>
          <Link className={style.btn} to={{pathname:'/order', state: e }}>Оформить заказ</Link>
          <button className={style.btn} onClick={ () => delCartElem(e.id)}>Отменить</button>
        </div>
      </div>
      })
    }
  </div>
}

let mapStateToProps = (state) => {
  return {
    // cartCount: state.catalogData.cartCount,
    cart: state.catalogData.cart
  }
}

export default connect(mapStateToProps, { setCart })(Cart)