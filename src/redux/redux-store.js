import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk"
import catalogReducer from './catalog-reducer'
import authLoginReducer from './authLogin-reducer'
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  catalogData: catalogReducer,
  loginData: authLoginReducer,
  form: formReducer  
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store