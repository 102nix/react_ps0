import { catalogAPI } from '../api/api'

const REQUEST = 'REQUEST'
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'
const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'
const UPDATE_CART = 'UPDATE_CART'

let initialState = {
  catalog: [],
  currentPage: 1,
  cartCount: JSON.parse(localStorage.getItem('passe') || 0).length,
  cart: JSON.parse(localStorage.getItem('passe')) || 0
}

const CatalogReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST:
      return {
        ...state,
        catalog: action.catalog
      }
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.value
      }
    case UPDATE_CART_COUNT:
      return {
        ...state,
        cartCount: action.value,
        cart: JSON.parse(localStorage.getItem('passe')) || 0
      }
    case UPDATE_CART:
      return {
        ...state,
        cartCount: JSON.parse(localStorage.getItem('passe') || 0).length,
        cart: JSON.parse(localStorage.getItem('passe'))
      }
    default: return state
  }
}

//AC:
export const setCatalog = (catalog) => ({ type: REQUEST, catalog } )
export const setCurrentPage = (value) => ({ type: UPDATE_CURRENT_PAGE, value })
export const setCartCount = (count) => ({type: UPDATE_CART_COUNT, value: count})
export const setCart = () => ({type: UPDATE_CART})

//Redux thunks:
export const requestCatalog = (linkName) =>  async (dispatch) => {
  let response = await catalogAPI.getCatalog(linkName)
  let responseCatalog = Object.values(response.data)
  let catalog = responseCatalog.map((elem, index) => {
    return {
      name: elem.name,
      img: elem.img,
      price: elem.price,
      id: Object.keys(response.data)[index]
    }
  })
  // console.log(catalog)
  dispatch(setCatalog(catalog))
}
export default CatalogReducer