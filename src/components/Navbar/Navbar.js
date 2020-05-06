import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { setIsAuth } from '../../redux/authLogin-reducer'
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <nav>
      <div className={style.logo}>rg-passe</div>
      <div>
          <div className={style.menu}>
            <NavLink to="/catalog/warmClothing" activeClassName={style.active}>Разогревочная одежда</NavLink>
            <NavLink to="/catalog/leotard" activeClassName={style.active}>Купальники</NavLink>
            <NavLink to="/catalog/kneepads" activeClassName={style.active}>Наколенники/Голеностопы</NavLink>
            <NavLink to="/catalog/halfShoes" activeClassName={style.active}>Полупальцы</NavLink>
            <NavLink to="/catalog/cases" activeClassName={style.active}>Чехлы</NavLink>
            <NavLink to="/catalog/lingerie" activeClassName={style.active}>Бельё</NavLink>
            <NavLink to="/catalog/belts" activeClassName={style.active}>Пояса</NavLink>
          </div>
      </div>
      <div className={style.authBlock}>
        { props.isAuth && 
          <div>
            <NavLink to="/login" onClick={ () => { props.setIsAuth(false) } }>Logout</NavLink>
          </div>
        }
        {/* { document.cookie != '' &&
          <div>
            АДМИНИСТРИРОВАНИЕ!
            <NavLink to="/login" onClick={ () => { props.setIsAuth(false) } }>Logout</NavLink>
          </div>
        } */}
        { !props.isAuth && document.cookie == '' && 
          <div className={style.loginReg}>
            <NavLink to="/login">Login </NavLink> <span>/</span> 
            <NavLink to="/register"> Registered</NavLink>
          </div>
        }
      </div>
    </nav>
  )
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.loginData.isAuth,
  }
}
export default connect(mapStateToProps, { setIsAuth })(Navbar)