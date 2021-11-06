import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Route} from "react-router-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./App.css";

import ProductProvider from "./UseContext"

ReactDOM.render(
    <ProductProvider>
      <Route>
         <App/>
      </Route>
    </ProductProvider>,
    document.querySelector("#root")
)