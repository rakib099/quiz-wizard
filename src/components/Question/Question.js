import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ques, idx, toggleShow}) => {
    const {question, options, correctAnswer} = ques;
    idx++;
    console.log(ques);

    return (
        <Col>
          <Card className='border-0 shadow rounded'>
              
            <Card.Body>
                <div className='question-container d-flex'>
                    <Card.Title className='q text-center w-50 mx-auto'>
                        Quiz {idx}: {question}
                    </Card.Title>
                    <div className="icon-container me-3">
                        <EyeIcon onClick={() => toggleShow(correctAnswer)} className="eye-icon text-danger"/>
                    </div>
                </div>
                <Row xs={1} md={2}>
                    <Col>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            {/* <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label> */}
                        </div>
                    </Col>
                    <Col>b</Col>
                    <Col>c</Col>
                    <Col>d</Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Question;