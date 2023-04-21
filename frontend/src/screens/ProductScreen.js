import React  from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,InputGroup,Form,DropdownButton} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { listBookDetails } from '../actions/bookActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = ({history,match}) => {
    const { id } = useParams()
    //let i = 0

    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
    const bookDetails = useSelector(state => state.bookDetails)
    const { loading, error, product } = bookDetails
    
    useEffect(()=> {
        dispatch(listBookDetails(id))
     },[id, dispatch])

    
     const navigate = useNavigate()
     
     const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`
        )
        
       }
    
    return (
    <>
      <Link className='btn btn-light my-3' to = '/'> Go Back</Link>
        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            
    <Row>
        <Col md={3}>
        <ListGroup variant='flush'>
        <Image  src={product.image_url} alt={product.title} fluid/>
        </ListGroup>
        </Col>
        <Col md={3} className='product_desc'>
        <ListGroup   variant='flush'>
            <ListGroup.Item>
            <h2>
                {product.title}
            </h2>
            </ListGroup.Item>
            <ListGroup.Item>
            <Rating value = {product.rating} text = {`${product.num_ratings} reviews`}/>
            </ListGroup.Item>

            <ListGroup.Item>
            Author : {product.author} | Publisher : {product.publisher}
            </ListGroup.Item>
            <ListGroup.Item>
            Description :   {product.description}
            </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
        
        <Card className='product_card'>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Pages:</Col>
                    <Col><strong>{product.pages} pages</strong></Col>
                </Row>
            </ListGroup.Item>
            </ListGroup>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product.price}</strong></Col>
                </Row>
            </ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col><strong>{product.countInstock > 0 ? 'In Stock' : 'Out of stock'}</strong></Col>
                </Row>
            </ListGroup.Item>
            </ListGroup>
        <ListGroup variant='flush'>
        <ListGroup.Item>
            <Row>
                <Col>Qty</Col>
                <Col>
                    <Form.Select as= "select" value={qty} onChange={(e)=> setQty(e.target.value)}>
                        {
                        [...Array(product.countInstock).keys()].map(x => (
                            <option key={x+1} value={x+1}>
                                {x+1}
                            </option>
                        ))}
                    </Form.Select> 
                </Col>
            </Row>
        </ListGroup.Item>
        </ListGroup>
        

        <ListGroup>
        <ListGroup.Item className='d-grid gap-2'>
        <Button className='btn-block'  type = 'button' onClick={addToCartHandler} disabled={product.countInstock === 0}>
            Add to Cart
        </Button>
        </ListGroup.Item>
        </ListGroup>
        
        </Card>
        </Col>
    </Row>
    )}
    </>
  )
}

export default ProductScreen
