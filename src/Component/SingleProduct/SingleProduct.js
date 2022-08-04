import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    console.log(props.product);
    let {setCartCount} = props;
    let {image, title} = props.product
    // let { } = props
    return (
            <div className="col-md-4 ">
                <div className="cart cart-size mb-4">
                    <img className='w-50 mx-auto' src={image} alt=""/>
                    <h3 className='product-title m-2 p-3'>{title.slice(0, 15)}</h3>
                    <div className="all-btn d-flex justify-content-center">
                        <button onClick={props.setCartCount} className='btn btn-success ms-2'>Add to Cart </button>
                        <button className='btn btn-danger ms-2 me-2'>Delete</button>
                        {/* <button className='btn btn-success ms-2'>Details</button> */}
                        <ReactModal product= {props.product}> </ReactModal>
                    </div>
                </div>
            </div>
            );
};

export default SingleProduct;