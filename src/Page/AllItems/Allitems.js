import React from 'react';
import useGetProductdata from '../../hooks/useGetProductdata';
import Item from '../Item/Item';

const Allitems = () => {
    const [products, setproducts]= useGetProductdata();
    return (
        <div>
           {
               products.map(item=><Item key={item._id} item={item}></Item>)
           }
        </div>
    );
};

export default Allitems;