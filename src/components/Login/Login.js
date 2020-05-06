import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Checkbox } from '../../common/FormControls/FormControl'
import { required } from '../../utils/validators/validators'
import style from './Login.module.css'
import { connect } from 'react-redux'
import { login } from '../../redux/authLogin-reducer'
import { Redirect } from 'react-router-dom'

let LoginForm = ({handleSubmit, error}) => {
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <Field placeholder="Email" name="email" component={Input} type="email" validate={[required]}/>
        </div>
        <div>
          <Field placeholder="Password" name="password" component={Input} type="password" validate={[required]} />
        </div>
        <div>
          <Field name={"rememberMe"} type={"checkbox"} component={Checkbox} />remember me 
        </div>
    
        { error && 
          <small className={style.totalError}>
            {error}
          </small>
        }
        <div>
          <button className={style.btn}>Login</button>
        </div>
      </form>
    </div>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  
  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData.email, formData.password, formData.rememberMe)  
  } 

  if (props.isAuth) {
    document.cookie=props.documentCookie
    console.log(document.cookie)
    if (document.cookie.split('=')[0] == 'zalilov@list.ru') {
      return <Redirect to={"/admin"} /> 
    }
    return <Redirect to={"/"} />
  }

  return ( 
    <div>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.loginData.isAuth,
    documentCookie: state.loginData.documentCookie
  }
}

export default connect(mapStateToProps, { login })(Login)