import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
//import './SingleItem.css';
const SingleItem = () => {
    const { id } = useParams();
    const [item] = useSingleItem(id);
    const {_id, name, vandor, pic, dis, qun } = item;
    //delivered function
    const [itemquantiry, setitemquantiry] = useState(qun);
    console.log(qun);
    const delivered=(e)=>{
        const newquantity = (itemquantiry||qun) - 1;
        if(qun>-1){
            const info = {id:_id, quantity: newquantity}
            fetch(`http://localhost:5000/item/update/${_id}`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
                .then(response => response.json())
                .then(data => {
                    if(data){
                        setitemquantiry(newquantity)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            
        }
    }

    const setquantity=(e)=>{
        e.preventDefault();
        const quantity= e.target.quantity.value;
        const info = {id:_id, quantity: quantity}
        fetch(`http://localhost:5000/item/update/${_id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    setitemquantiry(quantity)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='mb-5'>

            <Card body>
                <Row className='item_container' row>
                    <Col lg={3} md={12} sm={12} xs={12} className="img">
                        <img src={pic} width="200px" alt="" />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} className="body">
                        <div>
                            <h3>{name}</h3>   <p>Supplier: {vandor}</p>
                        </div>
                        <p>{dis}</p>

                    </Col>
                    <Col lg={2} md={6} sm={6} xs={12} className="quantity">
                        <h4>quantity: {itemquantiry || qun}</h4>
                        <button onClick={delivered}>delivered</button>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <form onSubmit={setquantity}>
                            <h2>restock </h2>
                            <input placeholder={itemquantiry || qun} name='quantity' type="number" />
                            <input type="submit"  />
                        </form>
                    </Col>
                </Row>
            </Card>
<Link to={"/allitems"}>
            <button>Manage Inventories</button>
</Link>
        </div>
    );
};

export default SingleItem;