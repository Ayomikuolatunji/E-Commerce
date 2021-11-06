import React from "react"

const Title=({name,title})=>{
    return(
       <div className="container">
            <div className="row">
                <div className="col-10 my-2 text-center text-title mx-auto">
                <h1 className="text-capitalize font-weight-bold">{name} <strong className="text-green">{title}</strong></h1>
                </div>
           </div>
       </div>
    )
}

export default Title