import React from "react"
import productsData from "./vschoolProducts"
import Product from './Product';
import './App.css';

function App() {
      let productComponents = productsData.map(product => {
            return (
                  <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
            )
      })

  return (
    <div className='products'>
        {productComponents}
    </div>
  )
}

export default App
