import Input from "./componenrts/form/input"
import Checkbox from "./componenrts/form/checkbox"
import ProductRow from "./componenrts/produits/products"
import ProductCategoryRow from "./componenrts/produits/productcategorierow"
import { useState } from "react"

const PRODUCTS=[
  {category:"fruits", price:'$1', stocked: true, name: "App le"},
   {category:"fruits", price:'$1', stocked: true, name: "Dragonfruit"},
  {category:"vegetables", price:'$2', stocked: true, name: "Passionfruit"},
  {category:"vegetables", price:'$4', stocked: true, name: "Spinach"},
  {category:"vegetables", price:'$1', stocked: true, name: "Peas"}
]

function App(){
  const [showStockeOnly, setShowStockeOnly]= useState(false)
  const[search, setSearch]=useState('')
  const visibleProducts= PRODUCTS.filter(product=>{
    if(showStockeOnly && !product.stocked){
      return false
    }
    return true
  })
  return(
    <div className="container my-3">
    <SearchBar showStockeOnly={showStockeOnly}
     onStockeOnlyChange={setShowStockeOnly}
     search={search}
     onSearchchange={setSearch}
     />
  <ProductTable products={visibleProducts} />
    </div>
  )
  }  
  
  
  function SearchBar({showStockeOnly, onStockeOnlyChange, search, onSearchchange}){
  return(
    <div>
    <div className="mb-3 ">
      <Input placeholder="rechercher..."
       value={search}
        onChange={onSearchchange} />
      <Checkbox 
      id="stocked" 
      checked={showStockeOnly}
      onChange={onStockeOnlyChange}
       label="n'affiche que les produit a stock" onChange={()=>null}/> 
    </div>
    </div>                                          
  )
  }
  function ProductTable ({products}){
    const rows=[]
    let lastcategory=null
    for(let product of products){
      if (product.category!== lastcategory){
        rows.push(<ProductCategoryRow
                    key={product.category}
                    name={product.category}
              />)
      }
     
    lastcategory= product.category
    rows.push(<ProductRow
                key={product.name}
                product={product}
               />) 
    }         
       return
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>prix</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>

  }
export default App