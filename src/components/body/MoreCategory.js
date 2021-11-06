import React from "react"
// import {ProductConsumer} from "../UseContext"
import Title from "../special/Title";
import Product from "../special/Product"
import {ProductContext} from "../../UseContext"


class MoreCategory extends React.Component{

    render(){

        return(
         <React.Fragment>
              <div className="MoreCategory">
                {/* title */}
                <Title name="More" title="Category"/>
                {/* product mapping destructioning */}
               <div className="container">
                  <div className="row d-flex flex-wrap justify-content-center w-100">
                    <ProductContext.Consumer>
                      {value=>{
                          return value.filteredProducts.map((product)=>{
                            if(product.category==="Local"){
                                return <Product key={product.id}  product={product} handleDetail={value.handleDetail} addToCart={value.addToCart}/>
                            }
                          })
                      }}
                  </ProductContext.Consumer>
                  </div>
               </div>
              </div>
         </React.Fragment>
        )
    }
}



export default MoreCategory