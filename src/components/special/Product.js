import React, { Component } from 'react';
import propTypes  from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';

export default class Product extends Component {
    render() {
        const {id,title,price,Image,Incart}=this.props.product;
        return (
            <div className="menu-item d-flex flex-wrap m-2 justify-content-center col-3">
                <div className="img-container" onClick={()=>{
                      this.props.handleDetail(id)}
                    }>
                    <img src={Image} className="photo" alt="images"/>
                    <button className="btn btn-outline-warning cart-btn" onClick={()=>{this.props.openModal(id);this.props.addToCart(id)}}disabled={Incart?true:false}>{Incart?"In cart":<FaShoppingCart/>}</button>
                </div>
                <header className="d-flex justify-content-between border-bottom w-100 p-3 ">
                    <h4 className="text-primary">{title}</h4>
                    <h5 className="price">NGN {price}</h5>
                </header>
            </div>      
        )
    }
}

Product.propTypes={
    product:propTypes.shape({
        id:propTypes.number,
        Image:propTypes.string,
        title:propTypes.string,
        price:propTypes.number,
        Incart:propTypes.bool
    }).isRequired
}

