import React from "react"
import Title from "../special/Title";
import Product from "../special/Product"
import {ProductContext} from "../../UseContext"
import LocalList from "./LocalList";
import {Link} from "react-router-dom";
import HotDeals from "./HotDeals";


class ProductList extends React.Component{

    render(){
        return(
         <React.Fragment>
              <div className="productList">
                {/* title */}
              <Link to="export">
                <Title name="Export" title="Category"/>
              </Link>
                {/* product mapping destructioning */}
               <div className="container">
                  <div className="row d-flex flex-wrap justify-content-center w-100">
                    <ProductContext.Consumer>
                      {value=>{
                          return value.filteredProducts.map((product)=>{
                           if(product.category==="Export"){
                            return(
                              <Product key={product.id}  product={product} handleDetail={value.handleDetail} addToCart={value.addToCart} openModal={value.openModal}
                              />
                           )
                           }
                           return value.product;
                          })
                      }}
                  </ProductContext.Consumer>
                  </div>
               </div>
              </div>
              <div>
                {/* local list on homepage */}
                <LocalList/>
                {/* hot deals  on homepage*/}
                <HotDeals/>
                {/* accodion */}
              </div>
             <div>
             </div>
         </React.Fragment>
        )
    }
}



export default ProductList