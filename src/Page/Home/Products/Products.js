import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Product from './product/Product';
import './products.css'


const Products = () => {
    const [products, setproducts] = useState([]);
    
    useEffect(()=>{
        fetch('productsdata.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    return (
        <div>

            <CardGroup className='product_grid mb-5'>
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
            </CardGroup>
        </div>
    );
};

export default Products;