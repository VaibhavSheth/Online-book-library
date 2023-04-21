import React, {useEffect} from 'react';
import Product from '../components/Product'
import Message from '../components/Message' 
import Loader from '../components/Loader' 
import {Row , Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { listBooks } from '../actions/bookActions';

const HomeScreen = () => {
  const dispatch = useDispatch() //using hooks
  const bookList = useSelector(state => state.bookList)
  const{loading , error, products} = bookList

   useEffect(()=> {
    dispatch(listBooks())
   },[dispatch]) //dependencies(any changes made will fires this function)
  
  
   return (
    <>
    <h1>Latest Products</h1>
    {loading? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>): (
    
    <Row>
        {products.map(product =>(
            <Col key={product.id} sm ={12} md={6} lg = {4} xl = {3}>
            <Product product={product}/>
            </Col>
        ))}
    </Row>
    )}
    </>
  )
}

export default HomeScreen
