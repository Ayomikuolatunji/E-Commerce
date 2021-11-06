import React from "react"
import {Link} from "react-router-dom"
import { ProductContext } from "../../UseContext"




class Details extends React.Component{
    render(){
        return(
           <div>
               <ProductContext.Consumer>
                    {value=>{
                        const {id,title,price,Image,Incart,info,company}=value.DetailProduct
                    return(
                        <div className="container py-5">
                            <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5 ">
                                    <h1 className="text-underline">{title}</h1>
                                    <div className="text-underline bg-success h-25"></div>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col-10 col-md-6 my-3 text-capitalize justify-content-center text-center">
                                        <img src={Image} alt="product-img"/>
                                    </div>
                                    <div className="col-10 col-md-6 my-3 text-capitalize justify-content-center">
                                        <h1><span className="text-primary">Product Name</span>:{title}</h1>
                                        <h3><span className="text-primary font-weight-bolder">Company</span>:{company}</h3>
                                        <h3><strong><span className="text-primary">Price:</span><span>$</span>{price}</strong></h3>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            <span className="text-primary font-weight-bolder detail">Product Details:</span>
                                            {info}
                                        </p>
                                        <div className="row my-2">
                                            <div className="d-flex justify-content-between border-bottom w-100 p-3 ">
                                                <Link to="/">
                                                  <button className="btn btn-outline-primary">Back To Products Page</button>
                                                </Link>
                                                <button className="btn btn-outline-warning" 
                                                onClick={()=>{
                                                    value.addToCart(id)
                                                }}
                                                disabled={Incart?true:false}>
                                                    {Incart?"incart":"Add to Cart"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )
                    }}
                </ProductContext.Consumer>
           </div>
        )
    }
}



export default Details