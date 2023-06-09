import React from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {Container } from 'react-bootstrap'; 
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentPage from './screens/PaymentPage';
import PlaceOrderPage from './screens/PlaceOrderPage';
const App = () => {
  return (
    <Router className="App">    
        <Header/> 
        <main className='py-3'>
          <Container>
            <Routes>
          <Route path='/shipping' element={<ShippingScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/product/:id' element={<ProductScreen/>}/>
          <Route path='/cart/:id?' element={<CartScreen/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/placeorder' element={<PlaceOrderPage/>}/>
          <Route path='/' element={<HomeScreen/>} exact />
          </Routes>
          </Container> 
        </main>
        <Footer/>
    </Router>
  )
}

export default App;
