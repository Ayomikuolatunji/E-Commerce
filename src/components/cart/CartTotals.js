import React from 'react'
import {Link} from "react-router-dom"
// import Paypal from './Paypal'

export default function CartTotals({value, history}) {
    const { cartSubTotal, cartTax,cartTotal,clearCart}=value
    return (
       <React.Fragment>
            <div className="container">
               <div className="row">
                    <div className="col-12 mt-2 ml-sm-5 m-md-auto col-md-8 text-capitalize text-right">
                      <Link to="/">
                          <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=>clearCart()}>Clear Cart</button>
                      </Link>
                      <h5><span>Sub Total:</span> <strong>NGN {cartSubTotal}</strong></h5>
                      <h5><span>Cart Tax:</span><strong>NGN {cartTax}</strong></h5>
                      <h5><span>Total:</span><strong>NGN {cartTotal}</strong></h5>
                      <div className="col-10 mx-auto my-5">
                         {/* <Paypal total={cartTotal} clearCart={clearCart} history={history}/> */}
                       </div>
                    </div>
               </div>
           </div>
       </React.Fragment> 
    )
}
