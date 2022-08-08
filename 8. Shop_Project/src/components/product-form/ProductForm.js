import React, { useState } from "react";
import './product-form.css';
export const ProductForm = (props) =>{

    
    //object
    const [formInput,setFormInput] = useState({
        productName:'',
        productImage:'',
        productPrice:''
    })

    const productNameHandler = (event) =>{
        setFormInput({
            ...formInput,
            productName:event.target.value
        });
    }

    const productImageHandler = (event) =>{
        setFormInput({
            ...formInput,
            productImage:event.target.value
        });
    }

    const productPriceHandler = (event) =>{
        setFormInput({
            ...formInput,
            productPrice:event.target.value
        });
    }


    //error state handler
    const [err,setErr]=useState({
        isError:false,
        message:''
    })

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(formInput.productName === '')
        {
            setErr({
                isError:true,
                message:'Enter product name'
            })
        }
        else if(formInput.productPrice === '')
        {
            setErr({
                isError:true,
                message:'Enter product price'
            })
        }

        else if(formInput.productImage === '')
        {
            setErr({
                isError:true,
                message:'Enter product Image Url'
            })
        }

        else{
            setErr({
                isError:false,
                message:''
            })
            props.onProductAdded(formInput)
        }
    }
    return(
        <div className="form-container">
            <form onSubmit={formSubmitHandler}>
            {err.isError ? <div className="Error_msg">{err.message}</div> :null}
                <div className="form-input">
                    <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
                </div>

                <div className="clearflix"></div>

                <div className="form-input">
                    <input type="text" placeholder="Product Image" onChange={productImageHandler}/>
                </div>

                <div className="clearflix"></div>

                <div className="form-input">
                    <input type="text" placeholder="Product Price" onChange={productPriceHandler}/>
                </div>

                <div className="clearflix"></div>

                <div className="form-input">
                    <button className="button_add">ADD</button>
                </div>

                <div className="clearflix"></div>
            </form>
        </div>
    )
}
