import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  /* Mistake I made while iterating the data
   * I tried to map over the raw data array without turning it into a state
   * Note: Always remember that the state is going to be changeable, we cannot do this to regular expression
   */
  return (
    <main>
      <seciton className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />;
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </seciton>
    </main>
  );
}

export default App;
