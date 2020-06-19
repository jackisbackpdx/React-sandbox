import React from "react"

function Product(props) {
    return (
        <div className='product'>
            <h3>{props.name}</h3>
            <p>{props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Product