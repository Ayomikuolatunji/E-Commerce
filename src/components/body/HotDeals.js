import React from "react"
import Title from "../special/Title";
import {ProductContext} from "../../UseContext"
import Product from "../special/Product";


class HotDeals extends React.Component{

    render(){
        return(
  
         <React.Fragment>
             <div className="product-container">
                <div className="HotDeals">
                    {/* title */}
                    <Title name="Hot" title="Deals"/>
                    {/* product mapping destructioning */}
                  <div className="container">
                      <div className="row d-flex flex-wrap justify-content-center w-100">
                      <ProductContext.Consumer>
                      {value=>{
                          return value.filteredProducts.map((product)=>{
                            if(product.category==="HotDeals"){
                                return <Product key={product.id}  product={product} handleDetail={value.handleDetail} addToCart={value.addToCart}
                                openModal={value.openModal}
                                />
                            }
                            return value.product;
                          })
                      }}
                  </ProductContext.Consumer>
                      </div>
                  </div>
                  </div>
             </div>
              {/*  */}
         </React.Fragment>
        )
    }
}



export default HotDeals