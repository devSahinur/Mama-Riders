import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './SingleData.css';

const SingleData = (props) => {
    const {img, name, id} = props.rider;
    const history = useHistory();
    console.log(history);

    const handleSelect = (name) => {
        history.push(`/rider/${name}`);
    }
    return (
        <Button onClick={() => handleSelect(name)} className="card-item" >
            <Card.Img variant="top" src={img} />
            <h1>{name}</h1>
        </Button>
    );
};

export default SingleData;