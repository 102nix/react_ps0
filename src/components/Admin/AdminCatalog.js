import React from 'react'
import style from './Admin.module.css'

const AdminCatalog = (props) => {
  return (
    <div>
      <div className={style.name}>{ props.name }</div>
      <img src={ require('../../assets/' + props.img) } />
      <div className={style.price}>{ props.price }</div>
    </div>
  )

}

export default AdminCatalog