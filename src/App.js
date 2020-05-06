import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
//components:
import Navbar from './components/Navbar/Navbar'
import CatalogContainer from './components/Catalog/CatalogContainer'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import Order from './components/Order/Order'
import OrderForm from './components/Order/OrderForm'
import Admin from './components/Admin/Admin'
import CatalogAdmin from './components/Admin/AdminContainerCatalog'

function App(props) {
  return (
    <div className='app-wrapper'>
      { document.cookie.split('=')[0] != 'zalilov@list.ru' && 
        <Navbar />
      }
      <Route path="/login" render={ () => <CatalogAdmin /> } />
      <Route path="/register" render={ () => <Register /> } />
      { document.cookie.split('=')[0] == 'zalilov@list.ru' && 
        <div>
          <Route path="/admin" render={ () => <Admin /> } />
          <Route path="/catalogadmin/:catalogId" render={ () => <CatalogAdmin /> } />
        </div>
      }
      <Route path="/catalog/:catalogId" render={ () => <CatalogContainer /> } />
      <Route path="/cart" render={ () => <Cart /> } />
      <Route path="/order" render={ () => <Order /> } /> 
      <Route path="/orderform" render={ () => <OrderForm /> } />
    </div>
  );
}

export default App;
