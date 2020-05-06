import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormControls/FormControl'
import { required, matchInput } from '../../utils/validators/validators'
import style from './Register.module.css'
import { connect } from 'react-redux'
import { register } from '../../redux/authLogin-reducer'
import { Redirect } from 'react-router-dom'

let RegisterForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Email" name="email" type="email" component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder="Password" name="password" type="password" component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder="Confirm" name="confirm" type="password" component={Input} validate={[required, matchInput]} />
      </div>
        { error && 
          <small className={style.totalError}>
            {error}
          </small>
        }
      <div>
        <button className={style.btn}>Send</button>
      </div>
    </form>
  )
}

RegisterForm = reduxForm({form: 'register'})(RegisterForm)

const Register = (props) => {
  const onSubmit = (dataForm) => {
    console.log(dataForm)
    props.register(dataForm.email, dataForm.password)
  }

  if (props.isAuth) {
    return <Redirect to={"/"} />
  }

  return (
    <RegisterForm onSubmit={onSubmit} />
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.loginData.isAuth
  }
}

export default connect(mapStateToProps, {register})(Register)