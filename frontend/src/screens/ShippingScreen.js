import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


  const [address,setAddress] = useState(shippingAddress.address)
  const [city,setCity] = useState(shippingAddress.city)
  const [postalCode,setPostalCode] = useState(shippingAddress.postalCode)
  const [country,setCountry] = useState(shippingAddress.country)

  const submithandler = (e) =>{
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country}))
        navigate('/payment')
  }
    return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submithandler}>
        <Form.Group controlId = 'address' className='my-3'>
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' placeholder = 'Enter the Address' required value = {address} onChange = {(e)=> setAddress(e.target.value)}>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId = 'city' className='my-3'>
        <Form.Label>City</Form.Label>
        <Form.Control type='text' placeholder = 'Enter City' required  value={city} onChange = {(e)=> setCity(e.target.value)}>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId = 'postalCode' className='my-3'>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type='text' placeholder = 'Enter the Postal Code' required value = {postalCode} onChange = {(e)=> setPostalCode(e.target.value)}>
        </Form.Control>
        </Form.Group>
        
        <Form.Group controlId = 'country' className='my-3'>
        <Form.Label>Country</Form.Label>
        <Form.Control type='text' placeholder = 'Enter the Country' required value = {country} onChange = {(e)=> setCountry(e.target.value)}>
        </Form.Control>

        <Button type='submit' variant='primary' className='my-3'>Continue</Button>
        </Form.Group>

      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
