import React from 'react'
import ProductsData from './productsData'
import Products from './products'
import './productList.css'
function ProductList() {
    //console.log(ProductsData)
    const products= ProductsData.map((product)=>{
        return(
            product.price>100? 
        <Products product={product} key={product.id}/>:
        null
        )
    })
  return (
    <div className='products-list'>
      {products}
    </div>
  )
}

export default ProductList
