import React from 'react';
import './Topic.css';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    const navigate = useNavigate();
    const {id, name, logo, total} = topic;
    
    let imgStyle = {backgroundColor: "#ffe6e6"};    /* "#f2f3e9" */

    const handleNavigate = () => {
        navigate(`topic/${id}`);
    }
    return (
        <Col>
          <Card className='h-100 w-100 border-danger'>
            <Card.Body>
              <Card.Img className='img-fluid' style={imgStyle} variant="top" src={logo} />
              <div className="topic-info mt-3 d-flex align-items-center justify-content-between">
                <Card.Title className=''>{name}</Card.Title>
                <h6>Quiz total: <span>{total}</span></h6>
              </div>
              <div className="card-button text-center mt-2">
                <Button className='fw-bold' onClick={handleNavigate} variant="outline-danger">Start Quiz</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Topic;