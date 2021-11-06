import React from "react";
import { Switch,Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import ProductList from "./components/body/ProductList";
import Error from "./components/Error";
import Cart from "./components/cart";
import Details from "./components/special/Details";
import LocalList from "./components/body/LocalList";
import Export from "./components/body/Export";
import Modal from "./components/special/Modal";




const App=()=>{
    return(
      <React.Fragment>
        <Navbar/> 
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route  path="/localList" component={LocalList}/>
          <Route path="/export" component={Export}/>
          <Route component={Error}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    )
}

export default App;