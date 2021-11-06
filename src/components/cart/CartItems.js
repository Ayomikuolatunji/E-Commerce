import React from 'react'
import {FaTrashAlt} from "react-icons/all"
export default function CartItems({item,value}) {
    const {id,Image,title,count,total,price}=item;
    const {increment, decrement,removeItem}=value
    return (
        <div>
         <div className="row my-2 text-capitalize text-center" >
            <div className="col-10 mx-auto col-lg-2 col-md-6">
                <img src={Image} style={{width:"5rem",height:"5rem"}} className="img-fluid" alt="img"/>
             </div>
             <div className="col-10 mx-auto col-lg-2 col-md-6">
                 <span className="d-lg-none font-weight-bolder">Product:</span>{title}
             </div>
             <div className="col-10 mx-auto col-lg-2 col-md-6">
                 <span className="d-lg-none font-weight-bolder">Price:</span>NGN {price}
             </div>
             <div className="col-10 mx-auto col-lg-2 col-md-6 my-2 my-lg-0">
                 <div className="d-flex justify-content-center">
                    <div className="buttn-increment mx-1">
                        <span onClick={()=>decrement(id)} className="btn btn-black btn-outline-dark mx-1">-</span>
                    </div>
                    <div className="but tn-increment mx-1">
                        <span  className="btn btn-black btn-outline-dark mx-1">{count}</span>
                    </div>
                    <div className="but btn-increment mx-1">
                        <span onClick={()=>increment(id)} className="btn btn-black btn-outline-dark mx-1">+</span>
                    </div>
                 </div>
             </div>
             <div className="col-10 mx-auto col-lg-2 col-md-6">
                <div onClick={()=>removeItem(id)}>
                    <FaTrashAlt/>
                </div>
             </div>
             <div className="col-10 mx-auto col-lg-2 col-md-6">
                 <strong className="font-weight-bolder">Item Total:{total}</strong>
             </div>
         </div>
        </div>
    )
}

