import React, { useEffect } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { requestCatalog, setCurrentPage, setCartCount } from '../../redux/catalog-reducer' // thunk, AC 
import style from './Catalog.module.css'
import Catalog from './Catalog'
import { onChangeCart } from './onChangeCart'

const CatalogContainer = (props) => {

  ////////////////////////////////////////////////////////
  const pageSize = 3
  const pageCount = Math.ceil(props.catalog.length / pageSize)
  const pages = []
  
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const goBack = () => {
    props.setCurrentPage(props.currentPage - 1)
  }

  const changePage = (page) => {
    props.setCurrentPage(page)
  }

  const goForward = () => {
    props.setCurrentPage(props.currentPage + 1)
  }
  ///////////////////////////////////////////////////////
  
  useEffect( 
    () => {
      props.requestCatalog(props.match.params.catalogId)
    },
    [props.match.params.catalogId]
  )

  const changeCart = (id) => {
    props.setCartCount(onChangeCart({
      id: id,
      catalog: props.catalog
    })) && props.setCartCount(JSON.parse(localStorage.getItem('passe')).length)
  }

  return <div>
    <div className={style.blogPages}>
      { props.currentPage != 1 &&
          <small className={style.goBackgoForward} onClick={goBack}> &#171; </small>
      }
      {
        pages
          .filter(p => p >= (props.currentPage - 2) && p <= (props.currentPage + 10))
          .map(p => {
            return <span key={p} className={props.currentPage == p && style.selected} 
                          onClick={ () => {changePage(p)} }>{ p }</span>
          })
      }

      { props.currentPage < pages.length &&
        <small className={style.goBackgoForward} onClick={goForward}> &#187; </small>
      }
    </div>
    
    { props.cartCount > 0 && 
      <NavLink to="/Cart" className={style.linkToCart}>
        <div className={style.cartCountBlock}>
          <span className={style.titleCart}>В корзине: </span>
          <span className={style.countCart}>{ props.cartCount }</span>
        </div>
      </NavLink>
    }

    <div className={style.catalog}>
      {
        // props.catalog.map(e => <Catalog key={e.img} name={e.name} price={e.price} img={e.img} id={e.id} />)
        props.catalog
          .slice(props.currentPage, props.currentPage + 3)
            .map(e => <Catalog key={e.img} name={e.name} price={e.price} img={e.img} 
                      id={e.id} changeCart={changeCart} />)
      }
    </div>
  </div>
}

let mapStateToProps = (state) => {
  return {
    catalog: state.catalogData.catalog,
    currentPage: state.catalogData.currentPage,
    cartCount: state.catalogData.cartCount
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { requestCatalog, setCurrentPage, setCartCount })
) 
(CatalogContainer)