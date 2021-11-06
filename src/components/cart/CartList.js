import React from 'react'
import CartItems from './CartItems'


export default function CartList({value}) {
  
    return (
        <div className="container">
          {
              value.cart.map(item=>{
                  return  <CartItems  item={item} value={value} key={item.id}/>
              })
          }
        </div>
    )
}
