import React, { useEffect } from 'react';
import './SingleProduct.css'
import ReactModal from './../ReactModal/ReactModal';

import AOS from "aos";
import "aos/dist/aos.css";

const SingleProduct = (props) => {
    useEffect(()=>{
        AOS.init();
    },[])
    // console.log(props.product);
    const {setCartCount}=props;
    return (
        <div data-aos="zoom-in" className='col-md-4'>
            <div className="card p-3 m-1 border">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <h4>{props.product.title.slice(0, 20)}</h4>
                <div>
                    <button onClick={setCartCount} className='btn btn-success'> Add to Cart </button>
                    {/* <button className='btn btn-primary mx-1'> Details </button> */}
                    <ReactModal product={props.product}></ReactModal>
                    <button className='btn btn-danger'> Remove </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;