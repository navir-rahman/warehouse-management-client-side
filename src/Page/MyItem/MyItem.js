import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useGetProductdata from '../../hooks/useGetProductdata';
import Item from '../Item/Item';
const MyItem = () => {
    const [products, setproducts] = useState([]);
    const [user]=useAuthState(auth);

    
    useEffect(()=>{
        // fetch('http://localhost:5000/alluseritem')
        // .then(res=>res.json())
        // .then(data=>setproducts(data))

        const getitems= async()=>{
            const email=user.email;
            const url = `http://localhost:5000/alluseritem?email=${email}`;
            const {data}= await axios.get(url);
            setproducts(data)
        }
        getitems()
    },[user])
    return (

        <div className='pageHeight'>
            {
                products.map(item => <Item key={item._id} item={item}></Item>)
            }
            <Link to={`/addMyItem`}>
                <Button variant="dark"> Add My Item</Button>
            </Link>
        </div>
    );

};

export default MyItem;