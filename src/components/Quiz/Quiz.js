import React from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const {name, questions, total} = quiz;
    console.log(quiz);

    return (
        <Container className='main-container my-4'>
            <h3 className='title text-center fw-bold'>Quiz of {name}</h3>
            <Container className="quiz-container mt-3">
                <Row xs={1} className="g-4">
                    {
                        questions.map((question, idx) => <Question 
                            key={question.id} 
                            ques={question}
                            idx={idx}
                            />)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Quiz;