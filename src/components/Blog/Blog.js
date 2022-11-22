import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <Container>
            <div className='blog mt-4 mb-5'>
                <h2 className='title mb-3'>Conceptual Questions</h2>
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                    <div className="col">
                        <div className="ques shadow pt-4 pb-3 px-4">
                            <h3>1. What is the purpose of React Router?</h3>
                            <p><span className='fw-semibold'>Ans:</span> React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
                        </div>  
                    </div>
                    <div className="col">
                        <div className="ques shadow p-3">
                            <h3>2. How does Context API work?</h3>
                            <p><span className='fw-semibold'>Ans:</span> React's Context API allows us to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually we are only able to pass data from parent to child via props). This API solves this problem called prop drilling.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="ques shadow p-3">
                            <h3>3. What does useRef Hook do?</h3>
                            <p><span className='fw-semibold'>Ans:</span> The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                            <p className='fw-semibold mb-0'><span>Some use cases of useRef Hook:</span></p>
                            <ul>
                                <li>Accessing the DOM nodes or React elements</li>
                                <li>Tracking State Changes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blog;