import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const {name, id, pic, dis, qun}=props.product;
    return (
        <Card  border="dark" className=''>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{name} <p>{qun}</p></Card.Title>

          <Card.Text>
        {
            dis
        }
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="dark">Update product</Button>{' '}
        </Card.Footer>
      </Card>
    );
};

export default Product;