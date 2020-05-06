import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rg-passe.firebaseio.com/catalog/',

})

export const catalogAPI = {
  getCatalog (valueInDB) {
    return instance.get(`${valueInDB}.json`)
  }
}

export const authAPI = {
  login (email, password) {
    const key = 'AIzaSyBWyGc0oepJOFwdM0B7jZLSIU6krzihcxs' // API-key!!!
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  },
  register (email, password) {
    const key = 'AIzaSyBWyGc0oepJOFwdM0B7jZLSIU6krzihcxs' // API-key!!!
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}