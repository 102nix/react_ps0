export const onChangeCart = (props) => {

  let localCartArr = JSON.parse(localStorage.getItem('passe')) || []
  let index = null

  const addToCart = () => {
    props.catalog.forEach(e => {
      if (e.id == props.id) localCartArr.push(e) && localStorage.setItem('passe', JSON.stringify(localCartArr))
    })
  }

  const delFromCart = (index) => {
    localCartArr.splice(index, 1) && localStorage.setItem('passe', JSON.stringify(localCartArr))
  }
 
  if (localCartArr.length == 0) {
      addToCart()
  } else {
      for (let i = 0; i < localCartArr.length; i++) {
        if (localCartArr[i].id == props.id) {
          index = i
        }
      }
      index !== null ? delFromCart(index) : addToCart() 
  }
}




