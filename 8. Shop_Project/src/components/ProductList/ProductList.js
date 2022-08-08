//ProductList.js
import React,{useContext, useEffect} from 'react'
import {Product} from '../Product/product'
import ProductContext from '../Store/ProductContext'

export const ProductList = (props) => {
    let ProductCtx= useContext(ProductContext)
    useEffect(()=>{
        getProduct();
    },[ProductCtx.products])
    let getProduct=async ()=>{
        let data= await fetch('http://127.0.0.1:3030/product/')
        let products_data= await data.json()
       
        // console.log(products_data); doubt??
        ProductCtx.setProducts(products_data.products)
      }
  return (
    <div>  
        <h2>Product List</h2>
        {ProductCtx.products.map((product,index)=>
          <Product key={index} productName={product.productName} productPrice={product.productPrice} productImage={product.productImage} productCreatedBy={product.productCreatedBy}/> )}
      </div>
  )
}
