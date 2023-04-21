import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}key={product.id}>
      <Card.Img className='image1' src = {product.image_url} variant='top'/>
      </Link>

      <Card.Body>
      <Link to={`/product/${product._id}`}>
      <Card.Title as = 'div' className='text-less'><strong>{product.title}</strong></Card.Title>
      </Link>

      <Card.Text as = 'div' className='text-less my-2' >
          <strong>Author: </strong>{product.author}
        </Card.Text>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.num_ratings} reviews`} />
      </Card.Text>

      <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
