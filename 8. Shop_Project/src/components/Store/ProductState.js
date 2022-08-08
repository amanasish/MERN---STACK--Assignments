import React, {useState}from 'react'
import ProductContext from './ProductContext'

export const ProductState = (props) => {
    const [products,setProducts] = useState([])
  return ( 
    <ProductContext.Provider value={{products,setProducts}}>
        {props.children} 
    </ProductContext.Provider>
  )
}
