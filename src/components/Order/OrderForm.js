import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormControls/FormControl'
import { required } from '../../utils/validators/validators'
import style from './Order.module.css'
import { NavLink } from 'react-router-dom'


let OrderForm = ({handleSubmit}) => {
   return (
     <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Email" name="email" type="email" component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder="Name" name="name" component={Input} validate={[required]} />
      </div>
      <div className={style.btnControl}>
        <button className={style.btnSet}>Оформить</button>
        <NavLink className={style.btnOff} to={"/cart"}>Отмена</NavLink>
      </div>
     </form>
   )
}

OrderForm = reduxForm({form: 'order'})(OrderForm)

const OrderEdit = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <OrderForm onSubmit={onSubmit} />
}

export default OrderEdit