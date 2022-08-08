import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">

        <span className="my_img"><img src="https://imgs.search.brave.com/pHKW17y-xKy6RMprnqjwD6JZr7sfEsEMWVD_iyTeGJs/rs:fit:1040:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/alNHN3RmbUlTbHdM/Qm1MbGlGUG5BSGFE/WSZwaWQ9QXBp"/></span>

        <span className="my_shop" onClick={() => setShow(true)}>

          AAG
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span> 
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>
            {size}
            </span>
            <span className="img"> <img src="https://imgs.search.brave.com/sMxOgmJ07ngZ-0YPZ4O0x78MoAMwjmDZw71_VZ9JQbE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/NGtoRnczRHgyVDlZ/bE4xRkxHQmh3SGFG/aiZwaWQ9QXBp"/></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
