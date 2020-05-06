import React from 'react'
import style from './Catalog.module.css'
import { connect } from 'react-redux'

// let cartArr = JSON.parse(localStorage.getItem('passe')) || []

const Catalog = (props) => {

  const changeButtonText = (e) => {
    props.changeCart(e.target.id)
    if (e.target.textContent == 'Добавить в корзину') {
      e.target.textContent = 'Удалить из корзины' 
    } else {
      e.target.textContent = 'Добавить в корзину'
    } 
  }
  console.log(props.isAuth)
  
  return (
    <div>
      <div className={style.name}>{ props.name }</div>
      <img src={ require('../../assets/' + props.img) } />
      <div className={style.price}>{ props.price }</div>

      {/* { cartArr.indexOf(props.id) != -1 &&  
      <button id={props.id} className={style.btn} onClick={changeButtonText}>Удалить из корзины</button>
      } */}

      { props.cart.find(e => e.id == props.id) &&
        <button id={props.id} className={style.btn} onClick={changeButtonText}>Удалить из корзины</button>
      }
      { !props.cart.find(e => e.id == props.id) && 
      <button id={props.id} className={style.btn} onClick={changeButtonText}>Добавить в корзину</button>
      }

      {/* { cartArr.indexOf(props.id) == -1 &&  
      <button id={props.id} className={style.btn} onClick={changeButtonText}>Добавить в корзину</button>
      } */}

    </div>
    
  )
}

let mapStateToProps = (state) => {
  return {
    cart: state.catalogData.cart
  }
}

export default  connect(mapStateToProps, {})(Catalog)