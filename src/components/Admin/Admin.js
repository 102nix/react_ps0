import React from 'react'
import style from './Admin.module.css'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div className={style.adminNav}>
      {/* <span className={style.logo}>rg-passe</span> */}
      <ul className={style.menu}>
        <li>
          <NavLink to="/catalogadmin/warmClothing" activeClassName={style.active}>Разогревочная одежда</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/leotard" activeClassName={style.active}>Купальники</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/kneepads" activeClassName={style.active}>Наколенники/Голеностопы</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/halfShoes" activeClassName={style.active}>Полупальцы</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/cases" activeClassName={style.active}>Чехлы</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/lingerie" activeClassName={style.active}>Бельё</NavLink>
        </li>
        <li>
          <NavLink to="/catalogadmin/belts" activeClassName={style.active}>Пояса</NavLink>
        </li>
      </ul>
    </div>

  )
}

export default Admin