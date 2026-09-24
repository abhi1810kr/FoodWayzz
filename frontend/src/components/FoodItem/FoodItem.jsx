import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContext'

const FoodItem = ({id, name, price, image, description}) => {

    const {cartItems, removeFromCart, addToCart, url} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-box">
            <img className='food-item-img' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
             ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} />
             : <div className="food-item-counter">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
             </div>
            }
        </div>
        <div className="food-item-info">
            <div className="name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-desc">{description}</p>
            <p className="food-price">₹{price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
