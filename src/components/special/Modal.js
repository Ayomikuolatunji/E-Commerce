import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../../UseContext'
import { Link } from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
          <ProductContext.Consumer>
              {(value)=>{
                  const { modalOpen,closeModal}=value
                  const {Image,price,title}=value.modalProduct

                  if(! modalOpen){
                      return null
                  }else{
                    return(
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div className="col-8 col-lg-4 col-md-6 text-center text-capitlaize mx-auto py-4 px-2" id="modal">
                                    <h4>Item Added To The Cart</h4>
                                    <img src={Image} alt="product"/>
                                    <h4>Product Name: {title}</h4>
                                    <h4 className="text-muted">Price:${price}</h4>
                                    <Link to="/">
                                        <button className="btn btn-outline-primary" 
                                        onClick={()=>closeModal()}
                                        >Continue Shopping</button>
                                    </Link>
                                    <Link to="/details">
                                        <button className="btn btn-outline-success m-2" 
                                        onClick={()=>closeModal()}
                                        >View Product Details</button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="btn btn-outline-warning m-2" 
                                        onClick={()=>closeModal()}
                                        >Go To Cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    )
                  }
              }}
          </ProductContext.Consumer>
        )
    }
}

const ModalContainer=styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
      background:#fff;
      border-radius:20px;
  }
`
