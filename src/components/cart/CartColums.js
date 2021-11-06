import React from 'react'

function CartColums() {
    return (
        <div className="container text-center  d-lg-block w-100">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">name of Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">Remove Item</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 col-md-6">
                        <p className="text-uppercase">Total</p>
                    </div>
                </div>
        </div>
    )
}

export default CartColums
