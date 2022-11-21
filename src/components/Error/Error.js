import React from 'react';
import { Link, } from 'react-router-dom';

const Error = () => {
  return (
    <div id="error" className="text-center mt-4">
      <h1>Oops!</h1>
      <p>You are trying to access a page that doesn't exist on this website.</p>
      <p>
        <span>404 </span>
        <i>Not Found</i>
      </p>
      <span>Return</span> to <Link to="/">Home</Link>
    </div>
  );
};

export default Error;