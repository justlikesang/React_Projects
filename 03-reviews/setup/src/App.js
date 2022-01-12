import React from 'react';
import Review from './Review';
import { DiApple } from 'react-icons/di';
function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline">
          </div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
