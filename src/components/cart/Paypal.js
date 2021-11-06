import React, { useState } from "react"
import { PaystackButton } from "react-paystack";


const Paypal = ({clearCart,total}) => {
  const publicKey = "pk_live_5a66314eebad0cc651cdba2f0ec232601133b41b"
  const amount=total;
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {
    email,
    clearCart,
    amount:total*100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () =>{ 
      alert("Wait! Do you want to cancel transaction? ")
      clearCart()
    }
  }
  return (
    <div className="App">
      <div className="con">
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
               <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="item-details">
              <p className="item-details__title">Checkout</p>
              <p className="item-details__amount">NGN{amount}</p>
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Paypal