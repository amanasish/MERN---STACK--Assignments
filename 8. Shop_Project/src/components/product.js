//product.js
import React from 'react'
import './Product.css'

export let Product =(props)=>{
    return(
        <div className='page'>
            {/* <div className='product_container'>
                <div className='product_title'>{props.productName} </div>
                <div className='product_price'>{props.productPrice}</div>
                <div className='product_image'>
                    <img src={props.productImage}></img>
                </div>
                
                <div className='product_created_by'>{props.productCreatedBy}</div>
                <div className='btn_container'>
                    <button className='add-to-cart' >Add to Cart</button>
                </div>
            </div> */}
            <div className="card" style={{width: "18rem"}}>
                <img src={props.productImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">Rs.{props.productPrice}<br/>{props.productCreatedBy}</p>
                    <button className='btn btn-secondary' >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
/*<div className="card" style={{width: "18rem"}}>
  <img src={props.productImage} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.productName}</h5>
    <p className="card-text">Rs.{props.productPrice}<br/>{props.productCreatedBy}</p>
    <button className='add-to-cart' >Add to Cart</button>
  </div>
</div>*/ 
