import React from 'react';
import Card from"./Card";


function Compo3() {
  return (
    <div>
     <div className="heading">
    <div className="name">
     <h1>Our Products</h1>
     </div>
     <div className='compo3-2'>
     <nav >
        
          <button  className='compo3-button'>breed1</button>
         <button className='compo3-button'>breed2</button>
          <button className='compo3-button'>breed3</button>
          <button className='compo3-button'>breed4</button>
         <button className='compo3-button'>breed5</button>
        
        </nav>
        </div>
        </div>
     <div className='card'>
        <Card />
        <Card />
        <Card />
        <Card />
     </div>
   
  </div>);}


  export default Compo3;