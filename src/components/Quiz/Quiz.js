import React, { useState } from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import { Row, Container, Toast, ToastContainer } from 'react-bootstrap';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData();
    const [show, setShow] = useState(false);
    const [correctAns, setCorrectAns] = useState("")

    const quiz = quizData.data;
    const {name, questions, total} = quiz;
    // console.log(quiz);

    // show correct answer
    const toggleShow = (correctAns) => {
        setShow(!show);
        setCorrectAns(correctAns);
    }

    return (
        <Container className='main-container my-4'>
            <Toast className='show-ans-toast text-center' show={show} onClose={()=> setShow(!show)}>
            <Toast.Header>
                <strong className="me-auto">
                    <span className='text-success'>Correct Answer</span> is :
                </strong>
            </Toast.Header>
            <Toast.Body className="text-danger bg-white fw-semibold">{correctAns}</Toast.Body>
            </Toast>

            <h3 className='title text-center fw-bold'>Quiz of {name}</h3>
            <div className="quiz-container mt-3">
                <Row xs={1} className="g-5">
                    {
                        questions.map((question, idx) => <Question 
                            key={question.id} 
                            ques={question}
                            toggleShow={toggleShow}
                            idx={idx}
                            />)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Quiz;