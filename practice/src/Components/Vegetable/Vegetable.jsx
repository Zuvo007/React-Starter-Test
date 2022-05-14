import React from 'react'
import './Vegetable.css';

function Vegetable({vegetable}) {
  
  return (
    <div className='vegetable-card'>
      <img src={vegetable.photo_url} alt=""  className="vegetable-card-image" />  
      <hr></hr>
       <div className="vegetable-card-text">
         <div>Name :  {vegetable.name}</div>
         <div>Quantity : {vegetable.quantity}</div>
         <div>Price : {vegetable.price}</div>
       </div>
       
    </div>
  )
}

export default Vegetable;