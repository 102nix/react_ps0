import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, requestCatalog } from '../../redux/catalog-reducer'
import AdminCatalog from './AdminCatalog'
import style from './Admin.module.css'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Admin from './Admin'


const AdminContainerCatalog = (props) => {
  const pageSize = 3
  const pageCount = Math.ceil (props.catalog.length / pageSize)
  const pages = []

  for (let i = 1; i < pageCount; i++) {
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

  useEffect(
    () => { props.requestCatalog(props.match.params.catalogId) }, 
    [props.match.params.catalogId]
  )

  return (
    <div>
      <Admin />
      <div className={style.blockPages}>
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
        <div className={style.catalog}>
          {
            props.catalog
              .slice(props.currentPage, props.currentPage + 3)
                .map(e => <AdminCatalog key={e.img} name={e.name} price={e.price} img={e.img} id={e.id} />)
          }
        </div>
    </div>
  )

}

let mapStateToProps = (state) => {
  return {
    catalog: state.catalogData.catalog,
    currentPage: state.catalogData.currentPage
  }


}

export default compose(
  withRouter,
  connect(mapStateToProps, {setCurrentPage, requestCatalog})
)(AdminContainerCatalog)