import React from "react"
import Title from "../special/Title"
import CartColums from "./CartColums"
import EmptyCart from "./EmptyCart"
import {ProductContext} from "../../UseContext"
import CartList from "./CartList"
import CartTotals from "./CartTotals" 


class Cart extends React.Component{
    render(){
        return(
            <div className="Cart">
                  <ProductContext.Consumer>
                  {(value)=>{
                       const {cart}=value;
                       if(cart.length>0){
                           return(
                               <React.Fragment>
                                    <Title name="Your" title="Cart"/>
                                     <CartColums/>
                                     <CartList value={value}/> 
                                     <CartTotals value={value} history={this.props.history}/>
                               </React.Fragment>
                           )
                       }else{
                           return(
                               <EmptyCart/>
                           )
                       }
                   }}
                  </ProductContext.Consumer>
            </div>
        )
    }
}
export default Cart