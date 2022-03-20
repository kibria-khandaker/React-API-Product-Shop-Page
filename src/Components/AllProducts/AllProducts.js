import React, { useEffect, useState } from 'react';
import SingleProduct from './../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    // console.log(products);
    return (
        <div className=' container'>
            <h1>All AllProducts </h1>
            <div className='row justify-content-between'>
                {
                    products.map((pd)=>(
                        <SingleProduct 
                        setCartCount={setCartCount} 
                        key={pd.id} 
                        product={pd} 
                        ></SingleProduct>
                    ))
                }
            </div>
            
        </div>
    );
};

export default AllProducts;