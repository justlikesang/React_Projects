import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-age section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
