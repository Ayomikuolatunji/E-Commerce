import React from "react";
import {ProductStores,DetailProduct}  from "./ProductListsProducts";



export const ProductContext=React.createContext()

class ProductProvider extends React.Component{
            constructor(props){
                super(props)
                this.state={
                    products:[...ProductStores],
                    DetailProduct:DetailProduct,
                    cart:[],
                    modalOpen:false,
                    modalProduct:DetailProduct,
                    cartSubTotal:0,
                    cartTax:0,
                    cartTotal:0,
                    cartDisplay:0,
                    searchBox:"",
                 }
                 
            }
             
      componentDidMount(){
          this.setProduct()
          const cart = localStorage.getItem("myCart");
          this.setState(
          { cart: JSON.parse(cart) ? JSON.parse(cart) : [] },
          this.addTotal
        );
      }

      setProduct=()=>{
          let temProducts=[];
          let activeProducts = JSON.parse(localStorage.getItem("myCart"));
          ProductStores.forEach((item)=>{
            let singleItem={...item};
            
            if(activeProducts){
                activeProducts.forEach(i => {
                if (singleItem.id === i.id) {
                singleItem = i;
                }
            });
            }
             temProducts=[...temProducts,singleItem]
             this.setState(()=>{
                    return {
                        products:temProducts
                    }
             })
          })
      }

    //   get product items by id///////////////////////////////////////////
      getItem=(id)=>{
        const product=this.state.products.find((item)=>{
           return item.id===id
        });
          return product
      }

    //   handle Prodcut details /////////////////////////////////////////
      handleDetail=(id)=>{
          const product=this.getItem(id);
          this.setState(()=>{
              return {
               DetailProduct:product
              } 
          })
      }
    // Add to cart method function /////////////////////////////////////////   
      addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.Incart=true;
        product.count=1;
        const price=product.price;
        product.total=price
        // change state
        this.setState(()=>{
            return{
                products:tempProducts,cart:[...this.state.cart,product]
            }
        },
        ()=>{
           this.addTotal();
           localStorage.setItem('myCart', JSON.stringify(this.state.cart));
        })
      }
    //   cart modal methode function///////////////////////////////////////////////
      openModal=(id)=>{
        const product=this.getItem(id)
        this.setState(()=>{
            return{
                modalProduct:product,
                modalOpen:true
            }
        },()=>{
            this.addTotal()
        })
      }
      closeModal=()=>{
          this.setState(()=>{
              return{
                  modalOpen:false
              }
          })
      }

    //   cart increment and decrement methode function//////////////////////////////
    increment=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{
            this.addTotal()
            localStorage.setItem("myCart", JSON.stringify(this.state.cart));
        })
    }
    decrement=(id)=>{
        let tempCart=[...this.state.cart];
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count-1;
        if(product.count===0){
            this.removeItem(id)
        }else{
            product.total=product.count*product.price;
            this.setState(()=>{
                return{
                    cart:[...tempCart]
                }
            },()=>{
                this.addTotal()
                localStorage.setItem("myCart", JSON.stringify(this.state.cart));
            })
        }
    }
    removeItem=(id)=>{
       let tempProduct=[...this.state.products];
       let tempCart=[...this.state.cart];
       tempCart=tempCart.filter(item=>item.id !==id)
       const index=tempProduct.indexOf(this.getItem(id));
       let removeProduct=tempProduct[index]
       removeProduct.Incart=false;
       removeProduct.total=0;
       removeProduct.count=0
       this.setState(()=>{
           return{
               cart:[...tempCart],
               products:[...tempProduct]
           }
       },()=>{
           this.addTotal()
           localStorage.setItem("myCart", JSON.stringify(this.state.cart));
       })
    }
    clearCart=()=>{
       this.setState(()=>{
        localStorage.removeItem("myCart");
           return{
               cart:[]
           }
       },()=>{
           this.setProduct()
           this.addTotal()
           localStorage.removeItem("myCart");
       })
    }
    addTotal=()=>{
        let itemNum=0
        let subTotal=0;
        this.state.cart.map(item=>subTotal +=item.total);
        this.state.cart.map(add=>itemNum +=add.label)
        const tempTax=subTotal*0.01;
        const itemNumCal=itemNum++
        const tax=Number(tempTax.toFixed(1))
        const total=subTotal+tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total,
                cartDisplay:itemNumCal
            }
        })
    }
    // handleSearch Box
    handleSearch=(e)=>{   
        this.setState(()=>{
            return{
              searchBox:e.target.value,
            }
        })
    }

// rendering our jsx for exportation to other component////////////////////////
    render(){
        const filteredProducts=this.state.products.filter(product=>{
            return product.title.toLowerCase().includes(this.state.searchBox.toLowerCase())
        })
        const {DetailProduct, cart, modalOpen, modalProduct, cartSubTotal, cartTax,cartTotal,cartDisplay,products}=this.state
        return(
           <ProductContext.Provider value={{
               products,
               filteredProducts,
               cart,
               DetailProduct,
               modalOpen,
               modalProduct,
               cartSubTotal,
               cartTax,
               cartTotal,
               cartDisplay,
              handleDetail:this.handleDetail,
              addToCart:this.addToCart,
              openModal:this.openModal,
              closeModal:this.closeModal,
              increment:this.increment,
              decrement:this.decrement,
              removeItem:this.removeItem,
              clearCart:this.clearCart,
              handleSearch:this.handleSearch
           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
export default ProductProvider




