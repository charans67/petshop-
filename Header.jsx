import React from 'react';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="heading">
    <div className="name">
     <h1>PETSHOP</h1>
     </div>
     <div>
     <nav>
        
          <button className='header-button' onClick={()=>navigate("/home")} >Home</button>
         <button className='header-button' onClick={()=>navigate("/shop")}>Shop</button>
          <button className='header-button'>Shop Detail</button>
          <button className='header-button'>Pages</button>
         <button className='header-button'>Contact</button>
        
        </nav>
        </div>
        <div className="search">
        <nav>
        <button  className='header-button'>🔍</button>
        <button className='header-button'>🛒</button>
        <button className='header-button'>👤</button>
        </nav>
    </div>
    </div>
  );
}

export default Header;
