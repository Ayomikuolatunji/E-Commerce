import React from 'react';
import { ProductContext } from '../../UseContext';
import {FaShoppingCart} from "react-icons/all"
import {Link} from "react-router-dom"
import Styled from "styled-components"


const Cartstyle=Styled.div`
    position:relative;
`
const CartValue=Styled.span`
    position:absolute;
    top:0;
    right:15%;
    bottom: 100px;
`
const Shop=Styled.div`
   font-size:20px;
`
export default function CartDisplay() {
    return (
        <div>
            <ProductContext.Consumer>
                { (value)=>{
                   return(
                       <>
                        <div className="cart-display-wrapper">
                            <Link to="/cart">
                               <div className="cart-inner-wrapper">
                                   <div className="cart-icon">
                                       <Cartstyle>
                                        <div className="d-flex text-align-center justify-content-center">
                                         <Shop>
                                              <FaShoppingCart/>
                                         </Shop>
                                           <span className="mt-3">Cart</span>
                                        </div>
                                         <CartValue>
                                             {value.cartDisplay}
                                         </CartValue>
                                       </Cartstyle>
                                   </div>
                               </div>
                            </Link>
                        </div>
                       </>
                   )
                   
                }}
            </ProductContext.Consumer>
        </div>
    )
}
