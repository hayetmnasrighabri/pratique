import React from 'react'
import './product.css'
function Products(props) {
  return (
    <div>
      <div className='product-a'>
        <h1>title: {props.product.title}</h1>
        <p>description: {props.product.description}</p>
        <p>{props.product.price}</p>
        <img src={props.product.image}/>
      </div>
    </div>
  )
}

export default Products
