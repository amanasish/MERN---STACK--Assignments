import { useState } from 'react';
import './App.css';
import {Product} from './components/Product';
import {ProductForm} from './components/product-form/ProductForm';
function App() {

  const [prod_arr,setProducts]=useState([
    {
      prod_name:'TATA SALT',
      prod_img:'https://imgs.search.brave.com/nS1sf-WW9taWVa2qAXVPYapl8U9N95aPRYwj5KJ17AE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/QXlZWTItRFlWV2F6/U3g5VVVLekVBSGFI/YSZwaWQ9QXBp',
      prod_price:'RS.99'
    },

    {
      prod_name:'Everpik',
      prod_img:'https://imgs.search.brave.com/LRavfqMwBYGVGLvbPqabrgcx-qMxXj923MQW2Puhee4/rs:fit:408:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/ZEZWZ2dYNWFwam0x/ck5tUFA4T3FRQUFB/QSZwaWQ9QXBp',
      prod_price:'Rs.10'
    },

    // {
    //   prod_name:'Nike',
    //   prod_price:'Rs.15000',
    //   prod_img:'https://imgs.search.brave.com/KSywDgwFmuWk9-l-QghUSnhgsWjtjSSewVZ7qFJss4k/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/RU9pVTZMQ3BDWndD/MEpxSEYyQTNBSGFK/USZwaWQ9QXBp'
    // },

    // {
    //   prod_name:'MRF Bat',
    //   prod_price:'Rs.1206',
    //   prod_img:'https://imgs.search.brave.com/2RAYJU13mVNEm-mH-u1OoScb1N4GsUIr2_szlLJSEbg/rs:fit:405:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/Smp6SUJ2NmFES2FQ/NmQxSW1fVU1BSGFJ/cSZwaWQ9QXBp'
    // },

    // {
    //   prod_name:'Ball',
    //   prod_price:'Rs.1105',
    //   prod_img:'https://imgs.search.brave.com/JOf1OZB1af8KJpfv1hj49uBieqVSvuNe1IIEK76Xryk/rs:fit:404:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/WWt0NHZ3WlFoVC1x/cjUzQ0c4bWFBSGFJ/ciZwaWQ9QXBp'
    // },

    // {
    //   prod_name:'Genius',
    //   prod_price:'Rs.800',
    //   prod_img:'https://imgs.search.brave.com/2zBKK6v0okfG5QEUG1E_sHZMGIcMNi7eqJmSPXuQY4A/rs:fit:447:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/U21fUEVISGJmaEtl/ZGlwNFJsUHNBSGFI/MiZwaWQ9QXBp'
    // }
    

  ])

  const addNewProductHandler=(product)=>{
    console.log('Product Addded !!');
    const productObj={
      prod_name:product.productName,
      prod_img:product.productImage,
      prod_price:product.productPrice
    }
    setProducts([...prod_arr,productObj]);
  }

  return (
    <div className="App">

    <h1>ADD PRODUCT</h1>
    <ProductForm onProductAdded={addNewProductHandler}></ProductForm>

    <h1>PRODUCTS</h1>


    { prod_arr.map((product,index)=>
        <Product key={index} pn={product.prod_name}
        prod_img={product.prod_img}
        pp={product.prod_price}/>
    )}

    </div>
  );
}

export default App;
