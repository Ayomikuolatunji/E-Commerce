import React from 'react';
import CartDisplay from './CartDisplay';
import {FaSearch} from "react-icons/all";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ProductContext } from '../../UseContext';
import { Link } from 'react-router-dom';
import {DelayInput} from 'react-delay-input';



export default function Search() {
    return (
        <>
            <div className="container-fluid border-bottom">
                <div className="row px-2 py-3">
                    {/* page header title */}
                   <div className="col-md-2">
                      <div className="brand-wrapper">
                        <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
                      </div>
                   </div>
                   {/* general page search form */}
                   <div className="col-md-8">
                      <ProductContext.Consumer>
                            {(value)=>{
                                return (
                                    <div className="input-group mb-3">
                                         <DelayInput minLength={2} delayTimeout={1000}  onChange={value.handleSearch} placeholder="search products" className="form-control search-input" type="text"/>
                                         <span className="input-group-text" ><FaSearch/></span>
                                     </div>
                                )
                            }}
                      </ProductContext.Consumer>
                   </div>
                   {/* general shoppping cart display */}
                   <div className="col-md-2">
                      <ul className="cart">
                       <li>
                       <DropdownButton id="dropdown-item-button" title="Account">
                            <Dropdown.Item as="button">Create an account</Dropdown.Item>
                             <Dropdown.Item as="button">Sign In</Dropdown.Item>
                        </DropdownButton>
                       </li>
                       <li><CartDisplay/></li>
                      </ul>
                   </div>
                </div>
            </div>
        </>
    )
}
