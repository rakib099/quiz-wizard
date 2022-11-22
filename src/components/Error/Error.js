import React from 'react';
import './Error.css';
import { Link, } from 'react-router-dom';

const Error = () => {
  return (
    <div id="error" className="text-center mt-4">
      <h1 className='error-title'>Oops!</h1>
      <p>You are trying to access a page that doesn't exist on this website.</p>
      <p>
        <span>404 </span>
        <i>Not Found</i>
      </p>
      <span>Return to</span> <Link className='return' to="/">Home</Link>
    </div>
  );
};

export default Error;