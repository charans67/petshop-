import React from 'react';


function Header() {
  return (
    <div className="heading">
    <div className="name">
     <h1>PETSHOP</h1>
     </div>
     <div>
     <nav>
        
          <button>Home</button>
         <button>Shop</button>
          <button>Shop Detail</button>
          <button>Pages</button>
         <button>Contact</button>
        
        </nav>
        </div>
        <div className="search">
        <nav>
        <button>🔍</button>
        <button>🛒</button>
        <button>👤</button>
        </nav>
    </div>
    </div>
  );
}

export default Header;
