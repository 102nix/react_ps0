import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const AUTH_LOGIN_DATA = 'AUTH_LOGIN_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const AUTH_LOGIN_DATA_REMEMBER ='AUTH_LOGIN_DATA_REMEMBER'

let initialState = {
  email: null,
  password: null,
  isAuth: false,
  documentCookie: '',
  showNavbar: true
}

const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_DATA:
      return {
        ...state,
        ...action.payload
      }
    case AUTH_LOGIN_DATA_REMEMBER:
      return {
        ...state,
        ...action.payload,
        documentCookie: action.payload.strCookie,
        showNavbar: false
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.val 
      }
    default: return state
  }
}

export const setLoginData = (email, password, isAuth) => ({ type: AUTH_LOGIN_DATA, payload: {email, password, isAuth} })
export const setLoginDataRemember = (email, password, isAuth, strCookie) => ({ type: AUTH_LOGIN_DATA_REMEMBER, payload: {email, password, isAuth, strCookie} })
export const setIsAuth = (val) => ({ type: SET_IS_AUTH, val })

export const login = (email, password, rememberMe) => async (dispatch) => {
  try { 
    let response = await authAPI.login(email, password)
    // console.log(response.data.idToken)
    if (rememberMe) {
      let strCookie = `${email}=${escape(response.data.idToken)}`
      let date = new Date()
      date.setMonth(date.getMonth() + 1)
      strCookie += `; expires=${date.toGMTString()}`
      dispatch(setLoginDataRemember(email, password, response.data.registered, strCookie)) 
    }
    dispatch(setLoginData(email, password, response.data.registered)) 
  }
  catch {
    let mesError = 'Не верный Login или пароль.'
    dispatch(stopSubmit('login', {_error: mesError}))
  }
}

export const register = (email, password) => async (dispatch) => {
  try { 
    let response = await authAPI.register(email, password)
    console.log(response)
    dispatch(setLoginData(email, password, true)) 
  }
  catch {
    let mesError = 'Не верный Login или пароль.'
    dispatch(stopSubmit('register', {_error: mesError}))
  }
}

export default authLoginReducer