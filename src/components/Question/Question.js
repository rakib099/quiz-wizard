import React from 'react';
import './Question.css';
import { Card, Col, Row, } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Question = ({ques, idx, toggleShow}) => {
    const {question, options, correctAnswer} = ques;
    idx++;
    // console.log(ques);

    return (
        <Col>
          <Card className='border-0 shadow rounded-xl quiz-card'>
            <Card.Body>
                <div className='question-container d-flex'>
                    <Card.Title className='q text-center w-50 mx-auto'>
                        Quiz {idx}: {question}
                    </Card.Title>
                    <div className="icon-container me-3">
                        <EyeIcon onClick={() => toggleShow(correctAnswer)} className="eye-icon text-danger"/>
                    </div>
                </div>
                <Row xs={1} md={2} className="options">
                    {
                        options.map(option => <Option 
                            key={option} 
                            option={option}
                            />)
                    }
                </Row>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Question;