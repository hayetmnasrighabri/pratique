import React from 'react'
import './product.css'
function Products(props) {
  return (
    <div>
      <div className='product-a'>
        <h1>title: {props.product.title}</h1>
        <img src={props.product.image}/>
        <p>{props.product.price}</p>
        <p>description: {props.product.description}</p>
       
        
      <button onClick={()=>{console.log('you going to buy this product', props.product.price)}}>buy</button>
      </div>
    </div>
  )
}

export default Products
