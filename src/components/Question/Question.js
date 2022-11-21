import React, { useState } from 'react';
import './Question.css';
import { Card, Col, Row, Toast, } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Question = ({ques, idx, toggleShow}) => {
    const [showResult, setShowResult] = useState(false);
    const [message, setMessage] = useState("Your answer is wrong");
    const {question, options, correctAnswer} = ques;
    idx++;
    // console.log(ques);

    const handleOptionClick = (option) => {
        if (option === correctAnswer) {
            setMessage("Congrats! Your answer is correct");
        }
        else {
            setMessage("Your answer is wrong");
        }
        setShowResult(true);
    }

    return (
        <Col>
          <Card className='border-0 shadow rounded-xl quiz-card'>
          <Toast className='text-center' show={showResult} onClose={() => setShowResult(false)}>
            <Toast.Header>
                <strong className="me-auto">
                    <span className='text-success'>{message}</span>
                </strong>
            </Toast.Header>
            <Toast.Body className="text-danger bg-white fw-semibold">{message}</Toast.Body>
            </Toast>

            <Card.Body>
                <div className='question-container d-flex'>
                    <Card.Title className='q text-center w-50 mx-auto'>
                        Quiz {idx}: {question}
                    </Card.Title>
                    <div className="icon-container me-3">
                        <EyeIcon onClick={() => toggleShow(correctAnswer)} className="eye-icon" />
                    </div>
                </div>

                <Row xs={1} md={2} className="options">
                    {
                        options.map(option => <Option 
                            key={option} 
                            option={option}
                            handleOptionClick={handleOptionClick}
                            />)
                    }
                </Row>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Question;