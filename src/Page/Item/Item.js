import React from 'react';
import { Card } from 'react-bootstrap';

const Item = (props) => {
    const { _id, name, vandor, pic, dis, qun}=props.item;
    return (
        <div className='m-5'>
           <Card body>
                under constraction
           </Card>
        </div>
    );
};

export default Item;