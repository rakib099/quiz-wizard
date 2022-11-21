import React from 'react';
import './Option.css';
import { Col, Row } from 'react-bootstrap';

const Option = ({option}) => {
    return (
        <Col>
            <Row className="option d-flex align-items-center px-3">
                <Col className='p-0' xs={1}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={option}/>
                </Col>
                <Col className='p-0' xs={11}>
                    <label className="form-check-label option-label" htmlFor={option}>
                        {option}
                    </label>
                </Col>
            </Row>
        </Col>
    );
};

export default Option;